import fs from 'fs';
import path from 'path';
import { logger } from '../utils/logger.js';
import { parseFrontmatter } from '../utils/parser.js';

/**
 * Validates a skill directory, a specific SKILL.md, or the entire .agents structure.
 *
 * @param {string} [targetPath] - Path to validate (defaults to workspace .agents)
 * @param {object} [options] - Options
 * @param {string} [options.cwd] - Working directory
 */
export async function validateCommand(targetPath, options = {}) {
  const cwd = options.cwd || process.cwd();
  
  let resolvePath = targetPath ? path.resolve(cwd, targetPath) : path.join(cwd, '.agents');

  if (!fs.existsSync(resolvePath)) {
    logger.error(`Path does not exist: ${resolvePath}`);
    return { success: false, errors: [`Path not found: ${resolvePath}`] };
  }

  const stats = fs.statSync(resolvePath);
  let skillsToValidate = [];
  let rootErrors = [];
  let rootWarnings = [];

  // Check if validating a single skill file, a skill folder, or the root .agents folder
  if (stats.isFile()) {
    if (path.basename(resolvePath) === 'SKILL.md') {
      skillsToValidate.push({
        folderName: path.basename(path.dirname(resolvePath)),
        dirPath: path.dirname(resolvePath),
        skillFilePath: resolvePath
      });
    } else {
      logger.error('Target file must be named SKILL.md');
      return { success: false, errors: ['Target file is not SKILL.md'] };
    }
  } else {
    // If it's a directory, check if it's a single skill directory (contains SKILL.md)
    const skillFile = path.join(resolvePath, 'SKILL.md');
    const skillsSubdir = path.join(resolvePath, 'skills');
    
    // It's a root customizations directory if it has the name '.agents', has a 'skills' subdirectory, or contains 'AGENTS.md'
    const isCustomizationRoot = path.basename(resolvePath) === '.agents' || 
                               fs.existsSync(skillsSubdir) || 
                               fs.existsSync(path.join(resolvePath, 'AGENTS.md'));

    if (fs.existsSync(skillFile) || !isCustomizationRoot) {
      skillsToValidate.push({
        folderName: path.basename(resolvePath),
        dirPath: resolvePath,
        skillFilePath: fs.existsSync(skillFile) ? skillFile : null
      });
    } else {
      // It is the root .agents directory or a customizations root containing skills/ folder
      const agentsFile = path.join(resolvePath, 'AGENTS.md');
      const skillsJsonFile = path.join(resolvePath, 'skills.json');

      if (fs.existsSync(agentsFile)) {
        logger.info(`Validating workspace rules: ${logger.cyanText('AGENTS.md')}`);
        // Basic check for AGENTS.md
        const agentsContent = fs.readFileSync(agentsFile, 'utf8');
        const lines = agentsContent.split('\n').length;
        logger.success(`AGENTS.md is valid (${lines} lines).`);
      }

      if (fs.existsSync(skillsJsonFile)) {
        logger.info(`Validating custom skills config: ${logger.cyanText('skills.json')}`);
        try {
          const config = JSON.parse(fs.readFileSync(skillsJsonFile, 'utf8'));
          if (config.entries && !Array.isArray(config.entries)) {
            rootErrors.push('skills.json "entries" field must be an array of paths.');
          }
          if (config.inherits && !Array.isArray(config.inherits)) {
            rootErrors.push('skills.json "inherits" field must be an array of objects/paths.');
          }
          if (config.exclude && !Array.isArray(config.exclude)) {
            rootErrors.push('skills.json "exclude" field must be an array of strings.');
          }
          if (rootErrors.length === 0) {
            logger.success('skills.json syntax and schema is valid.');
          }
        } catch (e) {
          rootErrors.push(`skills.json contains invalid JSON: ${e.message}`);
        }
      }

      const scanDir = fs.existsSync(skillsSubdir) ? skillsSubdir : resolvePath;

      
      if (fs.existsSync(scanDir) && fs.statSync(scanDir).isDirectory()) {
        const items = fs.readdirSync(scanDir, { withFileTypes: true });
        for (const item of items) {
          if (item.isDirectory() && item.name !== 'node_modules' && !item.name.startsWith('.')) {
            const innerSkillDir = path.join(scanDir, item.name);
            const innerSkillFile = path.join(innerSkillDir, 'SKILL.md');
            skillsToValidate.push({
              folderName: item.name,
              dirPath: innerSkillDir,
              skillFilePath: fs.existsSync(innerSkillFile) ? innerSkillFile : null
            });
          }
        }
      }
    }
  }

  if (skillsToValidate.length === 0 && rootErrors.length === 0) {
    logger.warn('No skills found to validate.');
    return { success: true, warnings: ['No skills found'] };
  }

  let totalErrors = [...rootErrors];
  let totalWarnings = [...rootWarnings];

  logger.info(`Validating ${skillsToValidate.length} skill(s)...`);
  logger.log('');

  const allowedSubdirs = ['scripts', 'examples', 'resources', 'references'];

  for (const skill of skillsToValidate) {
    logger.log(`Validating skill: ${logger.bold(skill.folderName)}`);
    let skillErrors = [];
    let skillWarnings = [];

    if (!skill.skillFilePath) {
      skillErrors.push(`Missing critical ${logger.redText('SKILL.md')} file in skill directory.`);
      logger.error(`  - Missing SKILL.md file`);
      totalErrors.push(...skillErrors);
      logger.log('');
      continue;
    }

    try {
      const content = fs.readFileSync(skill.skillFilePath, 'utf8');
      
      // 1. YAML frontmatter checks
      const { frontmatter, body, hasFrontmatter } = parseFrontmatter(content);
      
      if (!hasFrontmatter) {
        skillErrors.push('SKILL.md does not contain YAML frontmatter (starts/ends with ---).');
        logger.error('  - Missing or malformed YAML frontmatter');
      } else {
        if (!frontmatter.name) {
          skillErrors.push('Frontmatter does not contain a "name" property.');
          logger.error('  - Missing "name" in frontmatter');
        } else if (frontmatter.name !== skill.folderName) {
          skillWarnings.push(`Frontmatter "name" ("${frontmatter.name}") does not match skill directory name ("${skill.folderName}").`);
          logger.warn(`  - Frontmatter name is "${frontmatter.name}" but folder name is "${skill.folderName}"`);
        }

        if (!frontmatter.description) {
          skillErrors.push('Frontmatter does not contain a "description" property.');
          logger.error('  - Missing "description" in frontmatter');
        } else if (frontmatter.description.trim().length < 10) {
          skillWarnings.push('Frontmatter "description" is too short (should be at least 10 characters for trigger matching).');
          logger.warn('  - Description is very short');
        }
      }

      // 2. Line count checks (Body limit: 500 lines)
      const bodyLines = body.split('\n');
      if (bodyLines.length > 500) {
        skillWarnings.push(`SKILL.md body has ${bodyLines.length} lines, exceeding the 500 line recommendation. Consider moving additional files to a "references/" subdirectory.`);
        logger.warn(`  - Body has ${bodyLines.length} lines (exceeds 500 lines limit)`);
      }

      // 3. Folder structure checks
      const dirItems = fs.readdirSync(skill.dirPath, { withFileTypes: true });
      for (const dirItem of dirItems) {
        if (dirItem.name === 'SKILL.md' || dirItem.name.startsWith('.')) {
          continue;
        }

        if (dirItem.isDirectory()) {
          if (!allowedSubdirs.includes(dirItem.name)) {
            skillWarnings.push(`Non-standard subdirectory found: "${dirItem.name}". Standard subdirectories are: scripts/, examples/, resources/, references/.`);
            logger.warn(`  - Non-standard directory: ${dirItem.name}/`);
          }
        } else if (dirItem.isFile()) {
          // Warn about random files in the skill root folder besides SKILL.md
          skillWarnings.push(`Non-standard file found in skill root: "${dirItem.name}". Consider moving support files into standard directories.`);
          logger.warn(`  - Non-standard file: ${dirItem.name}`);
        }
      }

      if (skillErrors.length === 0 && skillWarnings.length === 0) {
        logger.success('  - All checks passed!');
      } else if (skillErrors.length === 0) {
        logger.success('  - Passed with warnings.');
      } else {
        logger.error(`  - Failed with ${skillErrors.length} errors.`);
      }

    } catch (e) {
      skillErrors.push(`Failed to read or parse skill: ${e.message}`);
      logger.error(`  - Error reading file: ${e.message}`);
    }

    totalErrors.push(...skillErrors.map(err => `[${skill.folderName}] ${err}`));
    totalWarnings.push(...skillWarnings.map(warn => `[${skill.folderName}] ${warn}`));
    logger.log('');
  }

  // Summary
  logger.log(logger.bold('Validation Summary:'));
  logger.log('-------------------');
  if (totalErrors.length === 0) {
    logger.success(`Validation passed successfully! Found ${totalWarnings.length} warning(s).`);
  } else {
    logger.error(`Validation failed with ${totalErrors.length} error(s) and ${totalWarnings.length} warning(s).`);
  }

  return {
    success: totalErrors.length === 0,
    errors: totalErrors,
    warnings: totalWarnings
  };
}

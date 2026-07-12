import fs from 'fs';
import path from 'path';
import { logger } from '../utils/logger.js';
import { parseFrontmatter } from '../utils/parser.js';

/**
 * Lists all Agent Skills found in the workspace customizations directory.
 *
 * @param {object} options - Command options
 * @param {string} [options.cwd] - Target working directory
 * @param {string} [options.path] - Custom directory path to scan
 */
export async function listCommand(options = {}) {
  const cwd = options.cwd || process.cwd();
  const targetDir = options.path ? path.resolve(cwd, options.path) : path.join(cwd, '.agents', 'skills');

  if (!fs.existsSync(targetDir)) {
    logger.warn(`Skills directory not found at: ${targetDir}`);
    logger.info('Run `skills init` to initialize the workspace directory.');
    return [];
  }

  try {
    const items = fs.readdirSync(targetDir, { withFileTypes: true });
    const skillsList = [];

    for (const item of items) {
      if (item.isDirectory()) {
        const skillPath = path.join(targetDir, item.name);
        const skillFile = path.join(skillPath, 'SKILL.md');

        if (fs.existsSync(skillFile)) {
          const content = fs.readFileSync(skillFile, 'utf8');
          const { frontmatter, hasFrontmatter } = parseFrontmatter(content);
          
          skillsList.push({
            folderName: item.name,
            name: frontmatter.name || item.name,
            description: frontmatter.description || '(No description provided)',
            hasFrontmatter,
            isValid: hasFrontmatter && !!frontmatter.name && !!frontmatter.description,
            path: skillFile
          });
        } else {
          skillsList.push({
            folderName: item.name,
            name: item.name,
            description: '(Missing SKILL.md)',
            hasFrontmatter: false,
            isValid: false,
            path: skillPath
          });
        }
      }
    }

    if (skillsList.length === 0) {
      logger.info('No skills found in this workspace.');
      logger.info('Create a new skill with `skills create <skill-name>`.');
      return [];
    }

    // Format output table
    logger.info(`Found ${skillsList.length} skills in ${targetDir}:`);
    logger.log('');

    // Determine column widths
    const colNameWidth = Math.max(...skillsList.map(s => s.name.length), 12) + 2;
    const colDescWidth = Math.max(...skillsList.map(s => s.description.length), 20) + 2;

    const pad = (str, width) => str.padEnd(width);

    // Headers
    const headers = `${pad('NAME', colNameWidth)}${pad('DESCRIPTION', colDescWidth)}STATUS`;
    logger.log(logger.bold(headers));
    logger.log(logger.bold(''.padEnd(colNameWidth + colDescWidth + 10, '-')));

    for (const skill of skillsList) {
      let statusStr = '';
      if (skill.isValid) {
        statusStr = logger.greenText('Active');
      } else if (!fs.existsSync(path.join(targetDir, skill.folderName, 'SKILL.md'))) {
        statusStr = logger.redText('Error: Missing SKILL.md');
      } else {
        statusStr = logger.yellowText('Invalid frontmatter');
      }

      logger.log(`${pad(skill.name, colNameWidth)}${pad(skill.description, colDescWidth)}${statusStr}`);
    }
    
    logger.log('');
    return skillsList;
  } catch (error) {
    logger.error(`Failed to list skills: ${error.message}`);
    throw error;
  }
}

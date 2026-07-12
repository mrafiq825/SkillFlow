import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Scaffolds a new Agent Skill in the workspace.
 *
 * @param {string} skillName - Name of the new skill
 * @param {object} options - Command options
 * @param {string} [options.cwd] - Target working directory
 * @param {string} [options.description] - Description for the skill
 * @param {boolean} [options.force] - Force overwrite if skill exists
 */
export async function createCommand(skillName, options = {}) {
  if (!skillName) {
    logger.error('Please specify a skill name (e.g. skills create my-custom-skill)');
    return;
  }

  // Normalize skill name to kebab-case
  const normalizedName = skillName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const cwd = options.cwd || process.cwd();
  
  const skillDir = path.join(cwd, '.agents', 'skills', normalizedName);
  const skillFile = path.join(skillDir, 'SKILL.md');

  if (fs.existsSync(skillDir) && !options.force) {
    logger.warn(`Skill folder already exists: ${logger.cyanText(`.agents/skills/${normalizedName}`)}`);
    logger.info('Use --force to overwrite the existing skill.');
    return;
  }

  try {
    fs.mkdirSync(skillDir, { recursive: true });

    // Load template file
    const templatesDir = path.resolve(__dirname, '../../templates');
    const templatePath = path.join(templatesDir, 'SKILL.template.md');

    let content = '';
    if (fs.existsSync(templatePath)) {
      content = fs.readFileSync(templatePath, 'utf8');
    } else {
      content = `---\nname: ${normalizedName}\ndescription: "${options.description || 'Custom skill description'}"\n---\n# ${normalizedName}\n`;
    }

    // Replace template parameters
    const description = options.description || `Custom skill to handle ${normalizedName} tasks.`;
    content = content.replace(/name:\s*custom-skill-name/i, `name: ${normalizedName}`);
    content = content.replace(/description:\s*".*"/i, `description: "${description}"`);
    content = content.replace(/# Skill Name/i, `# ${normalizedName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`);

    fs.writeFileSync(skillFile, content, 'utf8');

    logger.success(`Created skill ${logger.bold(normalizedName)}:`);
    logger.log(`Created directory: ${logger.cyanText(`.agents/skills/${normalizedName}/`)}`);
    logger.log(`Created file:      ${logger.cyanText(`.agents/skills/${normalizedName}/SKILL.md`)}`);
  } catch (error) {
    logger.error(`Failed to create skill: ${error.message}`);
    throw error;
  }
}

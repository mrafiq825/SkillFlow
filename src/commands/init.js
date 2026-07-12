import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Initializes the workspace for Agent Skills.
 * Creates the .agents directory structure and default AGENTS.md rules file.
 *
 * @param {object} options - Command options
 * @param {string} [options.cwd] - Target working directory (for tests)
 * @param {boolean} [options.force] - Force overwrite if already initialized
 */
export async function initCommand(options = {}) {
  const cwd = options.cwd || process.cwd();
  const agentsDir = path.join(cwd, '.agents');
  const skillsDir = path.join(agentsDir, 'skills');
  const agentsFile = path.join(agentsDir, 'AGENTS.md');

  logger.info(`Initializing Agent Customizations structure in: ${cwd}`);

  if (fs.existsSync(agentsDir) && !options.force) {
    logger.warn('Workspace already has a .agents/ directory initialized.');
    logger.info('Run with --force to re-initialize and reset the configuration.');
    return;
  }

  try {
    // Create folders
    fs.mkdirSync(skillsDir, { recursive: true });

    // Load templates
    const templatesDir = path.resolve(__dirname, '../../templates');
    const templatePath = path.join(templatesDir, 'AGENTS.template.md');

    let templateContent = '# Agent Rules & Customizations\n';
    if (fs.existsSync(templatePath)) {
      templateContent = fs.readFileSync(templatePath, 'utf8');
    } else {
      // Fallback in case templates folder isn't resolved properly in package distribution
      templateContent = `# Agent Rules & Customizations\n\nThis file defines workspace-scoped rules.\n`;
    }

    fs.writeFileSync(agentsFile, templateContent, 'utf8');

    logger.success('Successfully initialized Agent Customizations!');
    logger.log(`Created directory: ${logger.cyanText('.agents/')}`);
    logger.log(`Created directory: ${logger.cyanText('.agents/skills/')}`);
    logger.log(`Created file:      ${logger.cyanText('.agents/AGENTS.md')}`);
  } catch (error) {
    logger.error(`Failed to initialize Agent Customizations: ${error.message}`);
    throw error;
  }
}

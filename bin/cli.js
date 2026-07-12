#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initCommand } from '../src/commands/init.js';
import { createCommand } from '../src/commands/create.js';
import { listCommand } from '../src/commands/list.js';
import { validateCommand } from '../src/commands/validate.js';
import { logger } from '../src/utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package version
const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

function showHelp() {
  console.log(`
${logger.bold(logger.cyanText('skills-cli'))} — Manage and validate AI Agent Skills and Rules

${logger.bold('Usage:')}
  $ skills <command> [options]

${logger.bold('Commands:')}
  ${logger.cyanText('init')}                  Initialize Agent Customizations in the current directory (creates .agents/ folder)
  ${logger.cyanText('create')} <name>         Scaffold a new custom Agent Skill under .agents/skills/
  ${logger.cyanText('list')}                  List all installed skills in the current workspace
  ${logger.cyanText('validate')} [path]       Validate skill structure, YAML frontmatter, and line limits

${logger.bold('Options:')}
  ${logger.cyanText('-d, --description')} <desc>  Define description when creating a skill
  ${logger.cyanText('-f, --force')}               Force operations (overwrite existing directories or files)
  ${logger.cyanText('-p, --path')} <path>         Override scan directory for list/validate commands
  ${logger.cyanText('-v, --version')}            Show version number
  ${logger.cyanText('-h, --help')}               Show help info

${logger.bold('Examples:')}
  $ skills init
  $ skills create git-helper --description "Helper to formulate git commits"
  $ skills list
  $ skills validate
  $ skills validate .agents/skills/git-helper
`);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('-h') || args.includes('--help') || args[0] === 'help') {
    showHelp();
    process.exit(0);
  }

  if (args.includes('-v') || args.includes('--version') || args[0] === 'version') {
    console.log(`skills-cli v${pkg.version}`);
    process.exit(0);
  }

  const command = args[0];
  const commandArgs = args.slice(1);

  // Simple option parser
  const options = {};
  for (let i = 0; i < commandArgs.length; i++) {
    const arg = commandArgs[i];
    if (arg === '--force' || arg === '-f') {
      options.force = true;
    } else if (arg === '--description' || arg === '-d') {
      options.description = commandArgs[i + 1];
      i++; // Skip next arg
    } else if (arg === '--path' || arg === '-p') {
      options.path = commandArgs[i + 1];
      i++; // Skip next arg
    }
  }

  switch (command) {
    case 'init':
      await initCommand(options);
      break;

    case 'create': {
      // Find the first positional argument after the command name that is not an option or option value
      let name = null;
      for (let i = 0; i < commandArgs.length; i++) {
        const arg = commandArgs[i];
        if (arg.startsWith('-')) {
          if (arg === '-d' || arg === '--description' || arg === '-p' || arg === '--path') {
            i++; // Skip option value
          }
          continue;
        }
        name = arg;
        break;
      }
      if (!name) {
        logger.error('Please specify a skill name (e.g. skills create my-skill)');
        process.exit(1);
      }
      await createCommand(name, options);
      break;
    }

    case 'list':
      await listCommand(options);
      break;

    case 'validate': {
      // Find the first positional argument for path if any
      let validatePath = null;
      for (let i = 0; i < commandArgs.length; i++) {
        const arg = commandArgs[i];
        if (arg.startsWith('-')) {
          if (arg === '-d' || arg === '--description' || arg === '-p' || arg === '--path') {
            i++;
          }
          continue;
        }
        validatePath = arg;
        break;
      }
      const res = await validateCommand(validatePath || options.path, options);
      if (!res.success) {
        process.exit(1);
      }
      break;
    }

    default:
      logger.error(`Unknown command: "${command}"`);
      showHelp();
      process.exit(1);
  }
}

main().catch((err) => {
  logger.error(err.message);
  process.exit(1);
});

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

/**
 * Logger utility to output formatted messages to the console using ANSI escape colors.
 */
export const logger = {
  success: (msg) => console.log(`${colors.green}✔ ${msg}${colors.reset}`),
  error: (msg) => console.error(`${colors.red}✖ Error: ${msg}${colors.reset}`),
  warn: (msg) => console.warn(`${colors.yellow}⚠ Warning: ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.cyan}ℹ ${msg}${colors.reset}`),
  log: (msg) => console.log(msg),
  dim: (msg) => `${colors.gray}${msg}${colors.reset}`,
  bold: (msg) => `${colors.bold}${msg}${colors.reset}`,
  greenText: (msg) => `${colors.green}${msg}${colors.reset}`,
  yellowText: (msg) => `${colors.yellow}${msg}${colors.reset}`,
  redText: (msg) => `${colors.red}${msg}${colors.reset}`,
  cyanText: (msg) => `${colors.cyan}${msg}${colors.reset}`,
};

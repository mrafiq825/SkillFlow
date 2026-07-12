import test from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initCommand } from '../src/commands/init.js';
import { createCommand } from '../src/commands/create.js';
import { listCommand } from '../src/commands/list.js';
import { validateCommand } from '../src/commands/validate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sandboxPath = path.join(__dirname, 'sandbox_temp');

// Helper to clean up sandbox
function cleanupSandbox() {
  if (fs.existsSync(sandboxPath)) {
    fs.rmSync(sandboxPath, { recursive: true, force: true });
  }
}

test.beforeEach(() => {
  cleanupSandbox();
  fs.mkdirSync(sandboxPath, { recursive: true });
});

test.afterEach(() => {
  cleanupSandbox();
});

test('skills command integration flow', async (t) => {
  // 1. Test initCommand
  await t.test('initCommand initializes rules and folders', async () => {
    await initCommand({ cwd: sandboxPath });

    const agentsDir = path.join(sandboxPath, '.agents');
    const skillsDir = path.join(agentsDir, 'skills');
    const agentsFile = path.join(agentsDir, 'AGENTS.md');

    assert.ok(fs.existsSync(agentsDir), '.agents directory should exist');
    assert.ok(fs.existsSync(skillsDir), '.agents/skills directory should exist');
    assert.ok(fs.existsSync(agentsFile), '.agents/AGENTS.md should exist');

    const agentsContent = fs.readFileSync(agentsFile, 'utf8');
    assert.match(agentsContent, /# Agent Rules & Customizations/);
  });

  // 2. Test createCommand
  await t.test('createCommand scaffolds a new skill', async () => {
    // Make sure .agents exists
    await initCommand({ cwd: sandboxPath });

    await createCommand('sample-skill', {
      cwd: sandboxPath,
      description: 'A test sandbox skill'
    });

    const skillDir = path.join(sandboxPath, '.agents', 'skills', 'sample-skill');
    const skillFile = path.join(skillDir, 'SKILL.md');

    assert.ok(fs.existsSync(skillDir), 'sample-skill directory should exist');
    assert.ok(fs.existsSync(skillFile), 'sample-skill/SKILL.md should exist');

    const skillContent = fs.readFileSync(skillFile, 'utf8');
    assert.match(skillContent, /name: sample-skill/);
    assert.match(skillContent, /description: "A test sandbox skill"/);
  });

  // 3. Test listCommand
  await t.test('listCommand lists all skills in sandbox', async () => {
    await initCommand({ cwd: sandboxPath });
    await createCommand('skill-a', { cwd: sandboxPath, description: 'Desc A' });
    await createCommand('skill-b', { cwd: sandboxPath, description: 'Desc B' });

    const list = await listCommand({ cwd: sandboxPath });

    assert.strictEqual(list.length, 2);
    const names = list.map(s => s.name);
    assert.ok(names.includes('skill-a'));
    assert.ok(names.includes('skill-b'));
  });

  // 4. Test validateCommand
  await t.test('validateCommand detects errors and warnings', async () => {
    await initCommand({ cwd: sandboxPath });
    
    // Create a valid skill
    await createCommand('valid-skill', { cwd: sandboxPath, description: 'Valid description of the skill' });
    const validRes = await validateCommand('.agents/skills/valid-skill', { cwd: sandboxPath });
    assert.strictEqual(validRes.success, true);
    assert.strictEqual(validRes.errors.length, 0);

    // Create an invalid skill (missing SKILL.md)
    const invalidSkillDir = path.join(sandboxPath, '.agents', 'skills', 'invalid-skill');
    fs.mkdirSync(invalidSkillDir, { recursive: true });
    
    const invalidRes = await validateCommand('.agents/skills/invalid-skill', { cwd: sandboxPath });
    assert.strictEqual(invalidRes.success, false);
    assert.ok(invalidRes.errors.length > 0);
  });
});
  

import test from 'node:test';
import assert from 'node:assert';
import { parseFrontmatter } from '../src/utils/parser.js';

test('parseFrontmatter extracts YAML frontmatter and body correctly', () => {
  const content = `---
name: my-skill
description: "A description here"
---
# Body Title
This is body text.`;

  const { frontmatter, body, hasFrontmatter } = parseFrontmatter(content);

  assert.strictEqual(hasFrontmatter, true);
  assert.strictEqual(frontmatter.name, 'my-skill');
  assert.strictEqual(frontmatter.description, 'A description here');
  assert.strictEqual(body.trim(), '# Body Title\nThis is body text.');
});

test('parseFrontmatter handles content without frontmatter gracefully', () => {
  const content = `# Title Only\nNo frontmatter here.`;
  const { frontmatter, body, hasFrontmatter } = parseFrontmatter(content);

  assert.strictEqual(hasFrontmatter, false);
  assert.deepStrictEqual(frontmatter, {});
  assert.strictEqual(body, content);
});

test('parseFrontmatter parses values with colons and quotes', () => {
  const content = `---
name: "special:name"
description: 'my: description is: nice'
---
body`;

  const { frontmatter, hasFrontmatter } = parseFrontmatter(content);

  assert.strictEqual(hasFrontmatter, true);
  assert.strictEqual(frontmatter.name, 'special:name');
  assert.strictEqual(frontmatter.description, 'my: description is: nice');
});

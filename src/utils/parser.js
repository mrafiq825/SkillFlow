/**
 * Parses simple YAML frontmatter (key-value pairs) from a markdown string.
 * Supports keys containing colons and strips surrounding quotes from values.
 *
 * @param {string} content - The markdown content to parse
 * @returns {{ frontmatter: Record<string, string>, body: string, hasFrontmatter: boolean }}
 */
export function parseFrontmatter(content) {
  const result = {
    frontmatter: {},
    body: content,
    hasFrontmatter: false,
  };

  const normalized = content.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return result;
  }

  // Find the closing frontmatter delimiter
  const endIdx = normalized.indexOf('\n---\n', 4);
  if (endIdx === -1) {
    return result;
  }

  const frontmatterText = normalized.substring(4, endIdx);
  const bodyText = normalized.substring(endIdx + 5);

  const lines = frontmatterText.split('\n');
  const frontmatter = {};

  for (const line of lines) {
    const trimmed = line.trim();
    // Skip empty lines or comments
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) {
      continue;
    }

    const key = trimmed.substring(0, colonIdx).trim();
    let val = trimmed.substring(colonIdx + 1).trim();

    // Strip double and single quotes
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.substring(1, val.length - 1);
    }

    frontmatter[key] = val;
  }

  result.frontmatter = frontmatter;
  result.body = bodyText;
  result.hasFrontmatter = true;
  return result;
}

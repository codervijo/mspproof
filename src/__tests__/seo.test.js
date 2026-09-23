// src/__tests__/seo.test.js
// Technical-SEO regression check for Astro. Reads src/pages/index.astro,
// strips frontmatter, asserts the v3.B SEO baseline tags remain.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const raw = readFileSync(join(process.cwd(), 'src', 'pages', 'index.astro'), 'utf8');
// Strip frontmatter (between leading `---` markers) so we just check the HTML body.
const html = raw.replace(/^---[\s\S]*?---\n/, '');

describe('SEO baseline (src/pages/index.astro)', () => {
  it('has a <title>', () => {
    expect(html).toMatch(/<title>/);
  });

  it('has <meta name="description">', () => {
    expect(html).toMatch(/<meta\s+name="description"/);
  });

  it('has <link rel="canonical">', () => {
    expect(html).toMatch(/<link\s+rel="canonical"/);
  });

  it('has Open Graph tags', () => {
    expect(html).toMatch(/property="og:title"/);
    expect(html).toMatch(/property="og:url"/);
  });

  it('has Twitter card meta', () => {
    expect(html).toMatch(/name="twitter:card"/);
  });

  it('has favicon link', () => {
    expect(html).toMatch(/<link\s+rel="icon"[^>]*href="\/favicon\.svg"/);
  });

  it('has JSON-LD Organization + WebSite', () => {
    expect(html).toMatch(/application\/ld\+json/);
    expect(html).toMatch(/"@type":\s*"Organization"/);
    expect(html).toMatch(/"@type":\s*"WebSite"/);
  });
});

// Any page with an unresolved [VERIFY] marker must render noindex and stay
// out of the sitemap until the claim is checked.
describe('[VERIFY] markers gate indexing', () => {
  const guide = 'src/pages/guides/best-cmmc-compliance-software/index.astro';
  const src = readFileSync(join(process.cwd(), guide), 'utf8');
  const config = readFileSync(join(process.cwd(), 'astro.config.mjs'), 'utf8');

  it('noindex + sitemap exclusion while [VERIFY] remains', () => {
    if (!src.includes('[VERIFY')) return;
    expect(src).toMatch(/const verifyPending = true;/);
    expect(config).toContain('/guides/best-cmmc-compliance-software/');
  });
});

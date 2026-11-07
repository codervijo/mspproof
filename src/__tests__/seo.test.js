// src/__tests__/seo.test.js
// Technical-SEO regression check for Astro. Reads src/pages/index.astro,
// strips frontmatter, asserts the v3.B SEO baseline tags remain.

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

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
// out of the sitemap until the claim is checked. Covers every .astro page that
// declares `verifyPending`.
function astroPages(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = join(dir, d.name);
    if (d.isDirectory()) return astroPages(p);
    return d.name.endsWith('.astro') ? [p] : [];
  });
}

const pagesDir = join(process.cwd(), 'src', 'pages');
const config = readFileSync(join(process.cwd(), 'astro.config.mjs'), 'utf8');
const gated = astroPages(pagesDir)
  .map((file) => ({ file, src: readFileSync(file, 'utf8') }))
  .filter(({ src }) => src.includes('const verifyPending'));

describe.each(gated.map(({ file, src }) => {
  const route = '/' + relative(pagesDir, file).replace(/index\.astro$/, '').replace(/\.astro$/, '/');
  return [route, src];
}))('[VERIFY] markers gate indexing: %s', (route, src) => {
  // Strip the explanatory header comment so its mention of [VERIFY] doesn't count.
  const body = src.replace(/^---\n(?:\/\/.*\n)+/, '---\n');
  const pending = body.includes('[VERIFY');

  it('verifyPending matches whether [VERIFY] markers remain', () => {
    expect(body).toMatch(pending ? /const verifyPending = true;/ : /const verifyPending = false;/);
  });

  it('sitemap filter excludes the page exactly while pending', () => {
    if (pending) expect(config).toContain(`'${route}'`);
    else expect(config).not.toContain(`'${route}'`);
  });
});

describe('roundup', () => {
  it('homepage links to the guide', () => {
    const landing = readFileSync(join(process.cwd(), 'src/components/LandingPage.tsx'), 'utf8');
    expect(landing).toContain('href="/guides/best-cmmc-compliance-software/"');
  });
});

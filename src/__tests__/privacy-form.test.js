// src/__tests__/privacy-form.test.js
// The privacy request form is the site's only contact channel (faceless,
// PRD v2.A). It must deliver, and never fake success.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = readFileSync(join(process.cwd(), 'src', 'pages', 'privacy', 'index.astro'), 'utf8');
const config = readFileSync(join(process.cwd(), 'src', 'lib', 'site.ts'), 'utf8');

describe('privacy request form', () => {
  it('posts to Web3Forms with the shared key', () => {
    expect(src).toMatch(/fetch\("https:\/\/api\.web3forms\.com\/submit"/);
    expect(src).toMatch(/import\.meta\.env\.PUBLIC_WEB3FORMS_KEY/);
  });

  it('only reports success after the service confirms', () => {
    expect(src).toMatch(/if \(json\.success\) \{/);
  });

  it('errors instead of submitting when the key is unset', () => {
    expect(src).toMatch(/if \(!key\) \{\s*status\.textContent = "Requests can't be submitted/);
  });

  it('is the contact target in site identity', () => {
    expect(config).toContain('href: "/privacy/#contact"');
    expect(src).toContain('id="contact"');
  });
});

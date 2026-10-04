// src/__tests__/lead-form.test.js
// Regression check: the pilot form must actually deliver applications.
// It previously showed "Application received." without any network call.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = readFileSync(join(process.cwd(), 'src', 'components', 'LandingPage.tsx'), 'utf8');
const leadForm = src.slice(src.indexOf('function LeadForm()'), src.indexOf('function Field('));

describe('pilot LeadForm', () => {
  it('posts to Web3Forms', () => {
    expect(leadForm).toMatch(/fetch\("https:\/\/api\.web3forms\.com\/submit"/);
  });

  it('reads the access key from PUBLIC_WEB3FORMS_KEY', () => {
    expect(src).toMatch(/import\.meta\.env\.PUBLIC_WEB3FORMS_KEY/);
  });

  it('only shows success after the service confirms', () => {
    expect(leadForm).toMatch(/if \(data\.success\) \{\s*setStatus\("success"\)/);
    expect(leadForm).not.toMatch(/setSubmitted\(true\)/);
  });

  it('errors instead of faking success when the key is unset', () => {
    expect(leadForm).toMatch(/if \(!WEB3FORMS_ACCESS_KEY\) \{\s*setStatus\("error"\)/);
  });
});

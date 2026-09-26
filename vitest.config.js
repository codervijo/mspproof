// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // 'node', not 'jsdom': every test here reads source files, and the
    // scaffold's `environment: 'jsdom'` failed at startup because jsdom was
    // never in devDependencies. A test that needs a DOM can opt in per file
    // with a `// @vitest-environment jsdom` docblock (add jsdom first).
    environment: 'node',
    globals: true,
  },
});

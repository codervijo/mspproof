// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mspproof.com',
  // Directory format serves /<page>/ and the sitemap lists /<page>/, so every
  // canonical must end in a slash (CHECK_161).
  trailingSlash: 'always',
  integrations: [
    // A page with unresolved [VERIFY] markers renders noindex and must be
    // excluded here too. Remove a path once its markers are cleared.
    sitemap({ filter: (page) => ![].some((p) => page.includes(p)) }),
    react(),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

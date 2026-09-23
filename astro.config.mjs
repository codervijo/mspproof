// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mspproof.com',
  integrations: [
    sitemap({
      // Pages kept out of the sitemap while they carry unresolved [VERIFY]
      // markers (they also render noindex). Remove an entry once cleared.
      filter: (page) => !page.includes('/guides/best-cmmc-compliance-software/'),
    }),
    react(),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

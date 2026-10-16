import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vivekpanchal.dev',
  // Two small CSS files were the only render-blocking requests; inline them.
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    domains: ['avatars.githubusercontent.com'],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: {
      // github-dark's comment colour is 3:1 on its background; -default meets AA
      theme: 'github-dark-default',
    },
  },
});

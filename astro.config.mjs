import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://matt122004-beep.github.io',
  base: '/themoralaiproject-site',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});

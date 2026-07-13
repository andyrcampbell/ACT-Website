import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Deploy target: GitHub Pages — https://andyrcampbell.github.io/ACT-Website
  // When migrating to a custom domain, update `site` and remove `base`.
  site: 'https://andyrcampbell.github.io',
  base: '/ACT-Website',
});

import { defineConfig } from 'astro/config';

// Astro configuration for GitHub Pages project site
// - site/base ensure correct asset paths at /GETTING_STARTED
// - output static for GitHub Pages
// - server.host allows access from Codespaces/Docker
export default defineConfig({
  site: 'https://nealriley.github.io/GETTING_STARTED',
  base: '/GETTING_STARTED',
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 4321
  }
});

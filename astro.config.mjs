import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind()],
});
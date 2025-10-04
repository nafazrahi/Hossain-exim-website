import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  // ... other configurations
  integrations: [tailwind(), react()],
  server: {
    devToolbar: false
  }
});
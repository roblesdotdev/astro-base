import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { config } from './src/config'

export default defineConfig({
  site: config.site,
  server: {
    port: config.port,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})

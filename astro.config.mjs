import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import prefetch from "@astrojs/prefetch"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://robb4livonia.netlify.app",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    prefetch(),
    sitemap(),
  ],
})

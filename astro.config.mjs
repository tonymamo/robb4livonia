import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), prefetch()]
});
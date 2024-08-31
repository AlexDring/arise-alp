import { defineConfig } from 'astro/config';
import storyblok from "@storyblok/astro";
// import react from "@astrojs/react";
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
        featured: "components/Featured",
        page: 'storyblok/Page',
      },
    }),
    // react()
  ],
});
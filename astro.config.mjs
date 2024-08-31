import { defineConfig } from 'astro/config';
import storyblok from "@storyblok/astro";
// import react from "@astrojs/react";
// import { loadEnv } from 'vite';
import netlify from "@astrojs/netlify/functions";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: true,
      components: {
        // Add your components here
        featured: "components/Featured",
        page: 'storyblok/Page',
      },
    }),
    // react()
  ],
});
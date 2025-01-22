import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro'
import netlify from "@astrojs/netlify";
import { loadEnv } from 'vite'
const env = loadEnv("", process.cwd(), '')

// https://astro.build/config 
export default defineConfig({
  integrations: [
  storyblok({
    accessToken: env.PUBLIC_STORYBLOK_IS_PREVIEW === 'yes' 
    ? env.PREVIEW_STORYBLOK_TOKEN 
    : env.PUBLIC_STORYBLOK_TOKEN,
    bridge: env.PUBLIC_STORYBLOK_IS_PREVIEW === 'yes',
    components: {
      page: 'storyblok/Page',
      config: 'storyblok/Config',
      featured: 'components/Featured',
      highlighted: 'components/Highlighted',
      hero: 'components/Hero',
      banner: 'components/Banner',
      hero_gallery: 'components/Hero-Gallery',
    },
  })],
  output: env.PUBLIC_STORYBLOK_IS_PREVIEW === 'yes' 
  ? 'server' 
  : 'static',
  ...(import.meta.env.MODE === 'development' && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  }),
  adapter: netlify({
    imageCDN: false,
  })
});
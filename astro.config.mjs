import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro'
import netlify from "@astrojs/netlify/functions";
import { loadEnv } from 'vite'
const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["storyblok.com"],
  },
  integrations: [
  storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
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
  output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static',
  ...(env.STORYBLOK_ENV === 'development' && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  }),
  adapter: netlify()
});
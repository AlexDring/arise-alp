import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["storyblok.com"],
  },
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
  storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      config: 'storyblok/Config',
      featured: 'components/Featured',
      highlighted: 'components/Highlighted',
      hero: 'components/Hero',
      banner: 'components/Banner',
    },
  })]
});
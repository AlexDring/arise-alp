import { defineConfig } from 'astro/config'
import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro'
import netlify from '@astrojs/netlify'
import { loadEnv } from 'vite'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static',
  ...(env.STORYBLOK_IS_PREVIEW === 'yes' && {
    adapter: netlify({
      imageCDN: false
    })
  }),
  integrations: [
    storyblok({
      accessToken:
        env.STORYBLOK_IS_PREVIEW === 'yes'
          ? env.STORYBLOK_PREVIEW_TOKEN
          : env.STORYBLOK_PUBLIC_TOKEN,
      bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
      components: {
        page: 'storyblok/Page',
        config: 'storyblok/Config',
        featured: 'components/Featured',
        highlighted: 'components/Highlighted',
        hero: 'components/Hero',
        banner: 'components/Banner',
        hero_gallery: 'components/Hero-Gallery',
        text: 'components/Text',
        scroll_section: 'components/Scroll-Section'
      }
    })
  ],
  ...(import.meta.env.MODE === 'development' && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  }),
})

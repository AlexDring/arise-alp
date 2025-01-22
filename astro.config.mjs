import { defineConfig } from 'astro/config'
import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro'
import netlify from '@astrojs/netlify'
import { loadEnv } from 'vite'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken:
        env.STORYBLOK_IS_PREVIEW === 'yes'
          ? env.STORYBLOK_PREVIEW_TOKEN
          : env.STORYBLOK_PUBLIC_TOKEN,
      bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
      livePreview: env.STORYBLOK_IS_PREVIEW === 'yes' ? true : false,
      components: {
        page: 'storyblok/Page',
        config: 'storyblok/Config',
        featured: 'components/Featured',
        highlighted: 'components/Highlighted',
        hero: 'components/Hero',
        banner: 'components/Banner',
        hero_gallery: 'components/Hero-Gallery'
      }
    })
  ],
  output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static',
  ...(import.meta.env.MODE === 'development' && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  }),
  ...(env.STORYBLOK_IS_PREVIEW === 'yes' && {
    adapter: netlify({
      imageCDN: false
    })
  })
})

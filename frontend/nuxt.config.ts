// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  image: {
    quality: 80,
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_colors.scss" as *;'
        }
      }
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default 
    locales: ['en', 'es'],  // used in URL path prefix
    defaultLocale: 'en',    // default locale of your project for Nuxt pages and routings

  },
  css: ['~/assets/styles/default.scss'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiServer: "serverKey",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiMovies: process.env.API_MOVIES || "http://google.com",
      apiMoviesKey: process.env.API_MOVIES_KEY || "123456"
    }
  }

})

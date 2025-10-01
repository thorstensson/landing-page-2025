// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  fonts: {
    families: [
      { name: 'Sora', provider: 'google' },
      { name: 'Geist', provider: 'google' }
    ],

    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
  },

  runtimeConfig: {
    public: {
      formApi: '',
      s3Path: ''
    }
  },

  modules: ['@nuxt/fonts', '@vueuse/nuxt', 'nuxt-svgo', '@nuxt/icon'],

  plugins: [
    { src: '@/plugins/gsap.client.ts', mode: 'client' }
  ],

  build: {
    transpile: ['gsap'],
  },

  //@ts-ignore
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginOpenerPolicy: 'unsafe-none'
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/global.scss" as *;',
        },
      },
    },
  },

  svgo: {
    autoImportPath: './assets/svg/',
    defaultImport: 'component',
  },

  devtools: { enabled: false },

})
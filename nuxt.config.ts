// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    "@nuxt/ui",

    "shadcn-nuxt",
    'shadcn-nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./store/**']
  }
})
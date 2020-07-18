export default {
  mode: 'universal',
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Teenycons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Teenycons is a minimal icon pack.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  plugins: ['@/plugins/icons.js'],
  modules: ['nuxt-webfontloader', 'nuxt-svg-loader'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  webfontloader: {
    google: {
      families: ['Inter:400'],
    },
  },
  build: {},
};

export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Teenycons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  modules: ['nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Inter:400'],
    },
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  build: {},
};

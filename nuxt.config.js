export default {
  mode: 'universal',
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Teenyicons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        property: 'og:image',
        content: '/og.png',
      },
      {
        property: 'og:url',
        content: 'https://teenyicons.com',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'og:site_name',
        content: 'Teenyicons',
      },
      {
        name: 'twitter:image:alt',
        content: 'Minimalist 1px icons',
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
      families: ['Fira Code:400'],
    },
  },
  build: {},
};

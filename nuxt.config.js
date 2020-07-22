export default {
  mode: 'universal',
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Teenyicons — Tiny minimal 1px icons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'title',
        content: 'Teenyicons — Tiny minimal 1px icons',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          'An elegant icon set by Anja van Staden with more than a thousand icons.',
      },
      {
        property: '',
        content: '',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://teenyicons.com',
      },
      {
        property: 'og:title',
        content: 'Teenyicons — Tiny minimal 1px icons',
      },
      {
        property: 'og:description',
        content:
          'An elegant icon set by Anja van Staden with more than a thousand icons.',
      },
      {
        property: 'og:image',
        content: 'https://teenyicons.com/og.png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '1200',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:creator',
        content: '@_smhmd',
      },
      {
        name: 'twitter:site',
        content: '@teenyicon',
      },
      {
        name: 'twitter:title',
        content: 'Teenyicons — Tiny minimal 1px icons',
      },
      {
        property: 'twitter:description',
        content:
          'An elegant icon set by Anja van Staden with more than a thousand icons.',
      },
      {
        name: 'twitter:url',
        content: 'https://teenyicons.com',
      },
      {
        property: 'twitter:image',
        content: 'https://teenyicons.com/og.png',
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

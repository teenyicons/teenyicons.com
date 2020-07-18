export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
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
      families: ['Inter:400'], // Loads Lato font with weights 400 and 700
    },
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],
  optimizedImages: {
    optimizeImages: true,
    svgo: {
      plugins: [{ removeComments: true, removeUselessStrokeAndFill: true }],
    },
  },
  build: {},
};

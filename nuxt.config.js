const production = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/AnimatorCreator/'
  },
  build: {
    publicPath: 'assets'
  }
} : {router: {}, publicPath:{}}

console.log(production)

module.exports = {
  router: production.router,
  /*
  ** Headers of the page
  */
  head: {
    title: 'animator_creator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Create Animators in a split of a second' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: ['bootstrap-vue/nuxt'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    ...production.build,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        config.module.rules.push({
          test: /\.(mcfunction)$/,
          use: 'raw-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

console.log(module.exports)

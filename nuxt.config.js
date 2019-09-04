import pkg from './package'

export default {
  mode: 'spa',
  srcDir: 'app',

  router: {
    base: '/demo-lp/'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'LP Demo',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#2d89ef' },
      { name: 'theme-color', content: '#008000' }
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: 'favicon-16x16.png' },
      { rel: 'manifest', href: 'site.webmanifest' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    'ress',
    '@/assets/css/style.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vendor/modernizr-custom.js', mode: 'client' },
    { src: '@/plugins/observe-visibility', mode: 'client'}
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources','@bazzite/nuxt-optimized-images', 'nuxt-webfontloader'],

  styleResources: {
    scss: ['~assets/css/abstracts/*.scss']
  },

  optimizedImages: {
    optimizeImages: true
  },

  webfontloader: {
    custom: {
      families: ['Font Awesome 5 Free'],
      urls: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/regular.min.css'],
      testStrings: {
        'Font Awesome 5 Free' : '\f06e'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'inline-cheap-module-source-map'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|plugins\/vendor)/
        })
      }
    }
  }
}

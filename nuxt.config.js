require('dotenv').config()
const resolve = require('path').resolve
const axios = require('axios')


const TOKEN_INFO_URL='https://tokeninfo.endpass.com/api/v1/tokens'
const CONTENT_URL='https://cockpit.endpass.com/api'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'endpass Decentralized Cloud Wallet',
    titleTemplate: '%s | endpass',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Endpass is a decentralized identity platform.' },
			{ name: 'apple-mobile-web-app-title', content: 'Endpass' },
			{ name: 'application-name', content: 'Endpass' },
			{ name: 'msapplication-TileColor', content: '#da532c' },
			{ name: 'theme-color', content: '#ffffff' }
    ],
    link: [
    	{ rel: 'stylesheet', href: '/bulma.0.7.1.min.css' },
    	{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#4B0472' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extractCSS: true,
    extend (config, ctx) {
      // Uncomment line below to view webpack rules
      // console.dir(config.module.rules)
    },
  },
  generate: {
    interval: 100,
    routes: async function () {
      let routes = []
      let tokens = await getTokens()
      let tokenContents = await getTokenContent()


      let tokenRoutes = tokens.map(token => {
        return {
          route: `/coin/${token.name}-${token.symbol}`,
          payload: {
            token,
            content: tokenContents.find(c => c.symbol === token.symbol),
          },
        }
      })
      routes = routes.concat(tokenRoutes)

      return routes
    },
  },
  router: {
  	linkActiveClass: 'is-active'
  },
	modules: [
		'@nuxtjs/dotenv',
    'nuxt-sass-resources-loader',
    ['@nuxtjs/google-analytics', { id: process.env.ANALYTICS_SITE_ID }],
    '@nuxtjs/axios',
  ],
  axios: {
  },
  sassResources: [
    resolve(__dirname, 'assets/css/_settings.scss'),
    resolve(__dirname, 'assets/css/_mixins.scss'),
    resolve(__dirname, 'assets/css/global.scss'),
  ]
}

// Get token data from endpass API
// Returns promise
function getTokens() {
  return axios.get(TOKEN_INFO_URL)
  .then(res => {
    let tokens = res.data.filter(t => t.symbol && t.name); // not empty symbol
    return tokens.map(token => {
      token.name = token.name.replace(/[\W_]/g,' ').trim().replace(/\s+/g, '-').toLowerCase();
      token.symbol = token.symbol.split(' ')[0].toLowerCase();
      return token
    })
  })
}

// Fetches content about tokens from headless CRM
// Returns promise which resolves to an object of content keyed by uppercase
// token symbol
function getTokenContent() {
  let apiKey = process.env.COCKPIT_API_KEY
  if (!apiKey) {
    return Promise.reject('$COCKPIT_API_KEY is empty, cannot fetch content')
  }
  return axios.get(`${CONTENT_URL}/collections/get/coins?token=${apiKey}`)
  .then(res => {
    return res.data.entries
  })
}

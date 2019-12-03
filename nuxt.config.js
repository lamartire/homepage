require("dotenv").config();

const resolve = require("path").resolve;

import cockpit from "./plugins/cockpit.js";
import endpass from "./plugins/endpass.js";

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "endpass Decentralized Cloud Wallet",
    titleTemplate: "Endpass: %s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Endpass is a decentralized identity platform."
      },
      { name: "apple-mobile-web-app-title", content: "Endpass" },
      { name: "application-name", content: "Endpass" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "stylesheet", href: "/bulma.0.7.1.min.css" },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/yiq0llk.css"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#4B0472" },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    },
    extractCSS: true,
    extend(config, ctx) {
      // Uncomment line below to view webpack rules
      // console.dir(config.module.rules)
    }
  },
  generate: {
    interval: 100,
    routes: async function() {
      const routes = [];
      const tokens = await endpass.getTokens();
      const tokenContents = await cockpit.getCollection("coins");
      const tokenRoutes = tokens.map(token => {
        return {
          route: `/coin/${token.slug}-${token.symbol}`.toLowerCase(),
          payload: {
            token,
            content: tokenContents.find(c => c.symbol === token.symbol)
          }
        };
      });
      const features = await cockpit.getCollection("features", {
        filter: { published: true }
      });
      const featureRoutes = features.map(feature => {
        return {
          route: `/feature/${feature.title_slug}`,
          payload: feature
        };
      });

      return routes.concat(tokenRoutes, featureRoutes);
    }
  },
  router: {
    linkActiveClass: "is-active"
  },
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources",
    ["@nuxtjs/google-analytics", { id: process.env.ANALYTICS_SITE_ID }],
    "@nuxtjs/axios",
    "@nuxtjs/markdownit"
  ],
  axios: {},
  markdownit: {
    preset: "default",
    breaks: true,
    injected: true
  },
  styleResources: {
    scss: [
      resolve(__dirname, "assets/css/_settings.scss"),
      resolve(__dirname, "assets/css/_mixins.scss"),
      resolve(__dirname, "assets/css/_external.scss"),
      resolve(__dirname, "assets/css/_utilities.scss"),
      resolve(__dirname, "assets/css/_overrides.scss"),
      resolve(__dirname, "assets/css/_typography.scss"),
      resolve(__dirname, "assets/css/global.scss")
    ]
  }
};

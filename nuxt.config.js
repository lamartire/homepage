const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

const { NODE_ENV = "development" } = process.env;
const isProduction = NODE_ENV === "production";
const envFilePath = path.join(
  __dirname,
  isProduction ? ".env" : `.env.${NODE_ENV}`
);
const envFileBuf = fs.readFileSync(envFilePath);
const ENV_VARIABLES = dotenv.parse(envFileBuf);

dotenv.config({
  path: envFilePath
});

const cockpit = require("./plugins/cockpit.js").default;
const endpass = require("./plugins/endpass.js").default;

console.info(`env-file loaded from: ${envFilePath}`);
console.info(ENV_VARIABLES);

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "automated identity verification",
    titleTemplate: "%s | Endpass",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Endpass is a automated identity verification."
      },
      {
        hid: "goSiteName",
        name: "og:site_name",
        content: "Endpass, Inc."
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
        rel: "stylesheet",
        href: "https://unpkg.com/vueperslides/dist/vueperslides.css"
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
    ],
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
  plugins: [
    '~plugins/filters.js'
  ],
  generate: {
    interval: 100,
    routes: async function() {
      const routes = [];

      const posts = await cockpit.getCollection("blog_posts", {
        filter: { published: true},
        sort: {_created:-1},
      });
      const postRoutes = posts.map(post => {
        return {
          route: `/blog/${post.title_slug}`,
          payload: post
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

      return routes.concat(postRoutes,featureRoutes);
    }
  },
  router: {
    linkActiveClass: "is-active"
  },
  env: ENV_VARIABLES,
  modules: [
    "@nuxtjs/style-resources",
    ["@nuxtjs/google-analytics", { id: ENV_VARIABLES.ANALYTICS_SITE_ID }],
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
      path.resolve(__dirname, "assets/css/_settings.scss"),
      path.resolve(__dirname, "assets/css/_mixins.scss"),
      path.resolve(__dirname, "assets/css/_external.scss"),
      path.resolve(__dirname, "assets/css/_utilities.scss"),
      path.resolve(__dirname, "assets/css/_overrides.scss"),
      path.resolve(__dirname, "assets/css/_typography.scss"),
      path.resolve(__dirname, "assets/css/global.scss")
    ]
  }
};

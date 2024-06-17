// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ["@/assets/styles/index.scss"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "nuxt-icon",
  ],
  content: {
    contentHead: false,
    highlight: {
      theme: {
        default: "github-dark",
        dark: "github-dark",
        light: "github-light",
      },
    },
    markdown: {
      anchorLinks: false,
    },
  },
  colorMode: {
    classSuffix: "",
  },
  site: {
    url: "https://blog.renatolacerda.com",
    name: "Blog",
    description: `A blog where I share my studies and resources for development.
    The goal is to share what I have learned with the aim of helping other developers.`,
    defaultLocale: "en",
  },
  ogImage: {
    defaults: {
      component: "DefaultImage",
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "https://fav.farm/📘",
        },
      ],
    },
  },
  i18n: {
    baseUrl: "https://blog.renatolacerda.com",
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "pt",
        iso: "pt",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: false,
  },
});

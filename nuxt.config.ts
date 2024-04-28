// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ["@/assets/styles/index.scss"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "unplugin-icons/nuxt",
    "@nuxtjs/seo",
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
      rehypePlugins: {
        "remark-rehype": {
          footnoteLabel: "Notes",
          footnoteBackLabel: "Back to text",
        },
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
  googleFonts: {
    display: "fallback",
    families: {
      "Noto+Sans": true,
      Khula: true,
    },
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
});

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
    url: "https://frontend-walrus.netlify.app/",
    name: "Frontend Walrus",
    description: `Frontend Walrus is a website where I share my studies and resources for front-end development.
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
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
});

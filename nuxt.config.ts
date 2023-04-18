// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/styles/index.scss"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "unplugin-icons/nuxt",
  ],
  extends: ["nuxt-seo-kit"],
  content: {
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
          footnoteLabel: "Notas",
          footnoteBackLabel: "Voltar para o texto",
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
      Lato: true,
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://frontend-walrus.netlify.app/",
      siteName: "Frontend Walrus",
      siteDescription:
        "O Frontend Walrus é um site onde eu compartilho meus estudos e recursos de desenvolvimento FrontEnd. O objetivo é compartilhar o que eu tenho aprendido com o objetivo de ajudar outros desenvolvedores.",
      language: "pt-BR",
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
  experimental: {
    componentIslands: true,
  },
});

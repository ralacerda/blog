// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/styles/index.scss"],
  modules: ["@nuxt/content", "@nuxtjs/color-mode", "@nuxtjs/google-fonts"],
  content: {
    documentDriven: true,
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
    families: {
      "Noto+Sans": true,
      Lato: true,
      "Crimson+Text": true,
    },
  },
});

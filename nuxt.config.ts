// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "nuxt-particles",
    "@nuxt/content",
  ],
  colorMode: {
    preference: "dark",
  },
  css: ["~/assets/style.css"],
});

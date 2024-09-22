// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "nuxt-particles",
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/seo",
  ],

  tailwindcss: {
    cssPath: "~/assets/style.css",
  },

  robots: {
    UserAgent: "*",
    Disallow: "",
    Sitemap: "https://www.aysegulk.me/sitemap.xml",
  },

  colorMode: {
    preference: "dark",
  },

  site: {
    url: "https://aysegulk.me",
    name: "Full-Stack Web Developer | Nuxt.js, Vue.js, Node.js, C#, .NET, Blazor",
    description:
      "Explore the portfolio of Aysegul Karadan, an experienced full-stack web developer specializing in Nuxt.js and Vue.js. Delivering high-quality web solutions with clean and efficient code.",
    defaultLocale: "en",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/ico-green.png",
        },
      ],

      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      meta: [
        {
          name: "google-site-verification",
          content: "sU5URavUHAVc-UpIThT55t6Zp-byECJN_U9MyTdcgL8",
        },

        {
          name: "author",
          content: "Aysegul Karadan",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "robots",
          content: "index, follow",
        },

        {
          name: "og:title",
          content:
            "Aysegul Karadan - Full-Stack Web Developer | Nuxt.js, Vue.js",
        },
        {
          name: "og:url",
          content: "www.aysegulk.me",
        },
        {
          name: "og:description",
          content:
            "Explore the portfolio of Aysegul Karadan, an experienced full-stack web developer specializing in Nuxt.js and Vue.js. Delivering high-quality web solutions with clean and efficient code.",
        },
        {
          name: "og:image",
          content: "/XK.png",
        },
        {
          name: "og:url",
          content: "https://www.aysegulk.me", // Replace with your actual website URL
        },

        {
          name: "twitter:title",
          content:
            "Aysegul Karadan - Full-Stack Web Developer | Nuxt.js, Vue.js",
        },
        {
          name: "twitter:description",
          content:
            "Explore the portfolio of Aysegul Karadan, an experienced full-stack web developer specializing in Nuxt.js and Vue.js. Delivering high-quality web solutions with clean and efficient code.",
        },
        {
          name: "projects",
          content:
            "portfolio project, portfolio example code, mutliple portfolio code, multiple portfolio example, slideshow project code, infinity scroll project code, netflix clone nuxt3 project, aliexpress clone nuxt3 project, threads clone nuxt3 project, tailor website, tailor website nuxt3 project example, css animations, sewing animation, hamburger menu project code, dark mode light mode example with code, subscription page code example, quote generator example code, nuxt3 project example, nuxt3 application example",
        },
        {
          name: "3D-projects",
          content:
            "3D websites, 3D models, 3D website , 3D design, 3D designing, 3D website, 3D apps, 3D applications, 3D web design, 3D web developer, 3D web designer",
        },
        {
          name: "twitter:image",
          content: "/XK.png",
        },
      ],
    },
  },

  compatibilityDate: "2024-09-03",
});

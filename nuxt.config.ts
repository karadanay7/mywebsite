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
    
  ],

  tailwindcss: {
    cssPath: '~/assets/style.css',
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://www.aysegulk.me/sitemap.xml',
  },

  colorMode: {
    preference: "dark",
  },

  site: {
    url: "https://aysegulk.me",
    name: "Full-Stack Web Developer",
    description: "Explore the portfolio of Aysegul Karadan, an experienced full-stack web developer specializing in Nuxt.js and Vue.js. Delivering high-quality web solutions with clean and efficient code.",
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
      title: "Aysegul Karadan - Web Developer",

      meta: [
       
        {
          name: "google-site-verification",
          content: "sU5URavUHAVc-UpIThT55t6Zp-byECJN_U9MyTdcgL8",
        },
        {
          name: "main:keywords",
          content:
            "Aysegul Karadan, Full-Stack Web Developer, Nuxt.js, Vue.js, HTML5, CSS, JavaScript, Tailwind, Bootstrap, EcmaScript, Pinia, Web Development, UI/UX, Frontend, Backend, Industrial Engineering, Problem Solving ,Freelance Web Developer,Freelance full-stack Web Developer, Web Development Services, Full-Stack Developer, Custom Web Solutions, Responsive Web Design, Cross-Platform Development, User-Centric Web Design, Code Optimization, Back-End Development, Front-End Development, UI/UX Design Expert, Web development services,Web developers near me, Problem-Solving Developer, Efficient Data Handling, Modern Database Toolkit, Node.js Expertise, Express Framework, Clean and Efficient Code, Cutting-Edge Technologies, Continuous Learning, Tailwind CSS Specialist, Bootstrap Framework, EcmaScript Proficiency, Pinia Framework, Web Application Development, Cross-Browser Compatibility, SEO-Friendly Websites, Mobile-Friendly Development, Interactive Web Solutions, Custom Web Applications",
        },
        {
          name: "developer:keywords",
          content:
            "Web developer, web development,web design and development, web development services, full stack developer, full stack engineer, freelance web developer, freelance software developer, freelance app developers, web developer freelance, freelancer, website, website builder, website design, UI/UX design, developer, dwveloper, development, app, application, netflix, aliexpress, threads, software engineer, web design, web dev , web coding, full stack dev, engineer, freelance, freelancer, talented developer, best junior developer, junior web developer, junior frontend developer, junior full-stack developer, vue.js developer, vue developer, nuxt.js developer, nuxt deeveloper, junior nuxt developer, junior vue developer, junior full-stack nuxt developer, junior full-stack vue, junior frontend nuxt developer, junior frontend vue developer, junior full-stack, hire full-stack developer, hire web developer, hire nuxt developer, hire vue developer, hire junior developer, hire junior web developer, hire junior nuxt developer, hire junior vue developer, hire junior full-stack developer, hire junior full-stack web developer, hire junior full-stack nuxt developer, hire junior full-stack vue developer, hire junior frontend developer, hire junior frontend web developer, hire junior frontend nuxt developer, hire junior frontend vue developer, best developer website, best developer portfolio, portfolio website, best developer portfolio, best developer portfolio website",
        },
        {
          name: "nuxt:keywords",
          content:
            "nuxt, nuxt js, nuxt 3, nuxt.js, nuxt content, _nuxt, nuxt auth, nuxt image, nuxt img, nuxt tailwind, nuxt-js, vue nuxt, what is nuxt, vue, vue.js, vue js, bue.js ",
        },
        {name: "projects:keywords",
        content:
          "portfolio project, portfolio example code, mutliple portfolio code, multiple portfolio example, slideshow project code, infinity scroll project code, netflix clone nuxt3 project, aliexpress clone nuxt3 project, threads clone nuxt3 project, tailor website, tailor website nuxt3 project example, css animations, sewing animation, hamburger menu project code, dark mode light mode example with code, subscription page code example, quote generator example code, nuxt3 project example, nuxt3 application example, AI application, AI project, AI website, AI web design, 3D website, 3D models, 3D website , 3D design, 3D designing, 3D website, 3D apps, 3D applications, 3D web design, 3D web developer, 3D web designer, AI project, AI website, AI web design, AI web developer, AI web designer, E-commerce application, Application code examples, project code, project example, project code example, project example code, project code examples, project examples, project example codes, project codes, project examples code, project code example",

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
          content:
            "www.aysegulk.me",
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
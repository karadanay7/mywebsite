<template>
  <div
    class="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-8 xl:px-20 pt-8 pb-20"
  >
    <div v-for="project in projectsList" :key="project.id">
      <Project
        :name="project.name"
        :image="project.image"
        :viewUrl="project.viewUrl"
        :githubUrl="project.githubUrl"
        :description="project.description"
        :extraLink="project.extraLink"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content:
        "Explore my diverse portfolio of web development projects, showcasing expertise in Nuxt.js, .NET, C#, Blazor, OpenAI, and more. From AI-powered applications to 3D web experiences and e-commerce platforms.",
    },
    {
      name: "keywords",
      content:
        "Nuxt.js, Vue.js, Node.js, .NET, C#, Blazor, OpenAI, web development projects, full-stack developer, portfolio, e-commerce, AI applications, 3D websites, MealMate, meal planning, SaleSpot, special offers platform, IconBuilderAI, icon creation, 3D Spider-Man, immersive web experience, Three.js, Hue-Man, motivation tracker, Netflix Clone, Aliexpress Clone, Threads Clone, 3D Moon and Clouds, 3D DNA, 3D Mountains, 3D Earth, 3D Chips, 3D Cubes, Spline Design, tailor website, holiday towns showcase, profile cards, hamburger menu, joke teller robot, infinite scroll, subscription page, quote generator, dark mode implementation, responsive design, TailwindCSS, Pinia, Vuetify, Supabase, Prisma, NuxtUI, Stripe integration, HTML, CSS, JavaScript, Nuxt projects, Nuxt tutorials, Vue projects, Vue tutorials, C# projects, C# tutorials, .NET tutorials, Blazor projects, Blazor tutorials, full-stack tutorials, web development tutorials, JavaScript tutorials, TypeScript tutorials, React projects, React tutorials, Angular projects, Angular tutorials, Node.js projects, Node.js tutorials, Express.js, MongoDB, SQL Server, PostgreSQL, MySQL, GraphQL tutorials, REST API development, microservices architecture, Docker tutorials, Kubernetes tutorials, CI/CD pipelines, Git workflows, Agile methodologies, Scrum, Kanban, test-driven development (TDD), behavior-driven development (BDD), unit testing, integration testing, end-to-end testing, performance optimization, web accessibility, WCAG compliance, responsive web design, mobile-first development, progressive web apps (PWAs), serverless architecture, cloud computing, AWS, Azure, Google Cloud Platform, Firebase, Netlify, Vercel, Heroku, digital ocean, web security best practices, OWASP top 10, cross-site scripting (XSS) prevention, SQL injection prevention, CSRF protection, authentication and authorization, OAuth 2.0, JWT, social media integration, payment gateway integration, email integration, SMS integration, push notifications, WebSockets, real-time applications, data visualization, D3.js, Chart.js, WebGL, Three.js tutorials, AR/VR web development, machine learning in web applications, TensorFlow.js, natural language processing (NLP), computer vision, blockchain development, smart contracts, Solidity, web3.js, Ethereum, NFT development, IoT web applications, WebAssembly, Rust, Go, Python integration in web apps, Flask, Django, Ruby on Rails, PHP, Laravel, WordPress development, Shopify development, e-commerce platforms, CMS development, headless CMS, JAMstack, static site generators, SEO optimization techniques, Google Analytics integration, A/B testing, user experience (UX) design, user interface (UI) design, wireframing, prototyping, Figma, Adobe XD, Sketch, responsive images, lazy loading, code splitting, tree shaking, bundle optimization, web performance metrics, Core Web Vitals, accessibility testing, cross-browser compatibility, mobile app development with web technologies, Cordova, Ionic, React Native, Flutter, web components, Shadow DOM, Custom Elements, ES6+ features, async/await, Promises, Generators, Decorators, Proxy, Reflect, Map, Set, Symbol, BigInt, Intl API, Web Workers, Service Workers, IndexedDB, LocalStorage, SessionStorage, WebRTC, WebGL 2.0, WebGPU, WebXR, Web Bluetooth, Web USB, Web MIDI, Geolocation API, Battery Status API, Vibration API, Web Audio API, Media Capture and Streams API, WebVR, WebAR",
    },
    { name: "robots", content: "index, follow" },

    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "Projects | Aysegul Karadan - Full-Stack Developer",
    },
    {
      property: "og:description",
      content:
        "Explore my diverse portfolio of web development projects, showcasing expertise in Nuxt.js, .NET, C#, Blazor, OpenAI, and more. From AI-powered applications to 3D web experiences and e-commerce platforms.",
    },
    {
      property: "og:url",
      content: "https://aysegulk.me/projects",
    },
    {
      property: "og:image",
      content: "https://aysegulk.me/logo-green.png",
    },
    { property: "og:site_name", content: "Aysegul Karadan" },

    // LinkedIn
    {
      property: "linkedin:title",
      content: "Projects | Aysegul Karadan - Full-Stack Developer",
    },
    {
      property: "linkedin:description",
      content:
        "Explore my diverse portfolio of web development projects, showcasing expertise in Nuxt.js, .NET, C#, Blazor, OpenAI, and more. From AI-powered applications to 3D web experiences and e-commerce platforms.",
    },
    {
      property: "linkedin:url",
      content: "https://www.linkedin.com/in/aysegulkaradan/",
    },
    {
      property: "linkedin:image",
      content: "https://aysegulk.me/logo-green.png",
    },
    // Additional Meta Tags
    { property: "og:locale", content: "en_US" },
    { name: "author", content: "Aysegul Karadan" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#ffffff" },
  ],
  link: [{ rel: "canonical", href: "https://aysegulk.me/projects" }],
});
const projectsList = [
  {
    id: 1,
    name: "MealMate Mobile",
    image: "/projects/mealmate-m.jpg",
    viewUrl: "https://youtu.be/ZVQPObBMHS8",
    githubUrl: "https://github.com/karadanay7/MealMate-reactnative",
    description:
      "MealMate is a mobile application that generates personalized 7-day meal plans using React Native, Expo, Tailwind CSS, and OpenAI,  Firebase for OAuth , MongoDb",
  },
  {
    id: 2,
    name: "MealMate Web ",
    image: "/projects/mealmate.png",
    viewUrl: "https://youtu.be/SKZUzoLH1VQ",
    githubUrl: "https://github.com/karadanay7/MealMate",
    description:
      "MealMate is a web application that allows users to get 7-days meal plan. It is developed using .Net 8, Blazor, OpenAI and TailwindCSS",
  },
  {
    id: 3,
    name: "SaleSpot ",
    image: "/projects/salespot.png",
    viewUrl: "https://youtu.be/vZ2p8w5SZKg",
    githubUrl: "https://github.com/karadanay7/salesapp",
    description:
      "SaleSpot is a web application that allows stores to create special offers to users. It is developed using Nuxt.js,Pinia, Vuetify, Supabase, Prisma, TailwindCSS, NuxtUI",
  },

  {
    id: 4,
    name: "IconBuilderAI",
    image: "/projects/iconbuilderai.png",
    viewUrl: "https://youtu.be/-VvroGSEJ_8",
    githubUrl: "https://github.com/karadanay7/IconBuilderAI",
    description:
      "IconBuilderAi is a web application that allows users to create icons. It is developed using .Net 8, Blazor, OpenAI and TailwindCSS during a bootcamp with ",
    extraLink: "https://www.linkedin.com/in/altudev/",
  },
  {
    id: 5,
    name: " 3D Spider-Man",
    image: "/projects/spiderman.jpg",
    viewUrl: "https://www.youtube.com/watch?v=SjuyzpqcMFE",
    githubUrl: "https://github.com/karadanay7/spiderman",
    description:
      "🚀 Spider-Man Web Experience: Dive into a dynamic, immersive web experience inspired by Spider-Man 3! Nuxt.js - Three.js - TailwindCSS ",
  },

  {
    id: 6,
    name: "Hue-Man ",
    image: "/projects/hueman.png",
    viewUrl: "https://www.youtube.com/watch?v=aIKvxXebzGk",
    githubUrl: "https://github.com/karadanay7/hue-man",
    description:
      "Hue-Man is a web application that allows people stay motivated, track their goals and inspire eachother. It is developed using Nuxt.js,Node.js, Supabase, Prisma, NuxtUI, TailwindCSS",
  },
  {
    id: 7,
    name: "E-commerce website ",
    image: "/projects/butik.png",
    viewUrl: "https://youtu.be/ONhYLiRy6d8",
    githubUrl: "https://github.com/karadanay7/shoppingwebsite",
    description:
      "It's an example E-commerce website. It is developed using Nuxt.js, Supabase, Prisma, TailwindCSS",
  },
  {
    id: 8,
    name: "Photographer Website Example ",
    image: "/projects/photographer.png",
    viewUrl: "https://verdant-pixie-cc5ea6.netlify.app/",
    githubUrl: "https://github.com/karadanay7/personal-example-1",
    description:
      "It's an example photographer website. It is developed using Nuxt.js, TailwindCSS",
  },
  {
    id: 9,
    name: "Frog Concept Website",
    image: "/projects/frog.png",
    viewUrl: "https://eloquent-sprinkles-61e90b.netlify.app/",
    githubUrl: "https://github.com/karadanay7/ribbitville",
    description:
      "It's an example frog concept website. It is developed using Nuxt.js, TailwindCSS",
  },
  {
    id: 10,
    name: "Netflix Clone TV ",
    image: "/projects/netflix-clone.png",
    viewUrl: "https://youtu.be/ep0j7wUJ8rY",
    githubUrl: "https://github.com/karadanay7/netflix-clone-for-tv",
    description:
      "It's an example Netflix Clone TV. It is developed using Vue.js,Pinia, TailwindCSS",
  },
  {
    id: 11,
    name: "Aliexpress Clone ",
    image: "/projects/aliexpressclone.png",
    viewUrl: "https://youtu.be/ayB9RhNYKZY",
    githubUrl: "https://github.com/karadanay7/aliexpress-clone",
    description:
      "It's an example Aliexpress Clone. It is developed using Nuxt.js, TailwindCSS, Prisma, Supabase, Pinia, Stripe",
  },
  {
    id: 12,
    name: "Threads-Clone ",
    image: "/projects/threads.png",
    viewUrl: "https://youtu.be/ikDtpy4enyo",
    githubUrl: "https://github.com/karadanay7/threads-clone",
    description:
      "It's an example Threads Clone. It is developed using Nuxt.js, TailwindCSS, Prisma, Supabase, Pinia",
  },
  {
    id: 13,
    name: "3D Moon and Clouds",
    image: "/projects/moon.png",
    viewUrl: "https://brilliant-gelato-8bccd9.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-moonsky",
    description:
      "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 14,
    name: "3D DNA",
    image: "/projects/3ddna.png",
    viewUrl: "https://singular-creponne-e6d5bf.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-dna",
    description:
      "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 15,
    name: "3D- The Mountains",
    image: "/projects/3dmountain.png",
    viewUrl: "https://chic-cascaron-6c87d0.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-mountain",
    description:
      "It's an example 3D Landing Page. It is developed using Nuxt.js, and Three.js",
  },
  {
    id: 16,
    name: "3D - The Earth",
    image: "/projects/3dearth.png",
    viewUrl: "https://sunny-syrniki-b660e6.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-earth",
    description:
      "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 17,
    name: "3D Chips",
    image: "/projects/3dchips.png",
    viewUrl: "https://stirring-meerkat-9cc923.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-chips",
    description:
      "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 18,
    name: "3D Cubes",
    image: "/projects/3dcubes.png",
    viewUrl: "https://statuesque-alfajores-db4fb2.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-cubeboxes",
    description:
      "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 19,
    name: "Tailor Website - Nuxt.js",
    image: "/projects/terzileyla.png",
    viewUrl: "https://peppy-taffy-37bcff.netlify.app",
    githubUrl: "https://github.com/karadanay7/terzileyla",
    description:
      "It's an example Tailor Website. It is developed using Nuxt.js, TailwindCSS",
  },
  {
    id: 20,
    name: "Holiday Towns of Izmir",
    image: "/projects/holiday.png",
    viewUrl: "https://karadanay7.github.io/holidaytownsofizmirslideshow/",
    githubUrl: "https://github.com/karadanay7/holidaytownsofizmirslideshow",
    description:
      "It's an example Website. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 21,
    name: "Profile Cards",
    image: "/projects/profilecards.png",
    viewUrl: "https://karadanay7.github.io/profilecards/",
    githubUrl: "https://github.com/karadanay7/profilecards",
    description:
      "It's an example Profile Cards page. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 22,
    name: "Hamburger Menu",
    image: "/projects/hamburgermenu.png",
    viewUrl: "https://karadanay7.github.io/hamburgermenu/",
    githubUrl: "https://github.com/karadanay7/hamburgermenu",
    description:
      "It's an example Hamburger Menu. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 23,
    name: "Tell me a joke!!!",
    image: "/projects/tellmeajoke.png",
    viewUrl: "https://karadanay7.github.io/joke-teller-robot/",
    githubUrl: "https://github.com/karadanay7/joke-teller-robot",
    description:
      "It's an example Joke Teller Robot. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 24,
    name: "Infinite Scroll",
    image: "/projects/infinityscroll.png",
    viewUrl: "https://karadanay7.github.io/Achitecture-Designs-Scroll/",
    githubUrl: "https://github.com/karadanay7/Achitecture-Designs-Scroll",
    description:
      "It's an example Infinite Scroll page. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 25,
    name: " Subscription Page",
    image: "/projects/subscriptionpage.png",
    viewUrl: "https://karadanay7.github.io/subscriptionpage/",
    githubUrl: "https://github.com/karadanay7/subscriptionpage",
    description:
      "It's an example Subscription Page. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 26,
    name: " Quote Generator",
    image: "/projects/quotegenerator.png",
    viewUrl: "https://karadanay7.github.io/quotegenerator/",
    githubUrl: "https://github.com/karadanay7/quotegenerator",
    description:
      "It's an example Quote Generator. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 27,
    name: "Profile Card",
    image: "/projects/profilecard.png",
    viewUrl: "https://karadanay7.github.io/profilecard/",
    githubUrl: "https://github.com/karadanay7/profilecard",
    description:
      "It's an example Profile Card page. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 28,
    name: "Dark Mode",
    image: "/projects/darkmode.png",
    viewUrl: "https://karadanay7.github.io/darkmode/",
    githubUrl: "https://github.com/karadanay7/darkmode",
    description:
      "It's an example Dark Mode page. It is developed using HTML, CSS, JavaScript",
  },
];
</script>

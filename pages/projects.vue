<template>
  <div class="grid gap-12 grid-cols-1 md:grid-cols-2  xl:grid-cols-3 px-8 xl:px-20 pt-8 ">
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
  title: "Aysegul Karadan - Full-Stack Developer | Nuxt.js, Vue.js, Node.js",
  meta: [
  {
      name: "description",
      content: "Welcome to my projects page. Here you can find my projects that I have developed using Nuxt.js, .Net 8, C#, Blazor, OpenAI, and more.",
    },
    {
      name: "projects",
      content:
        "Nuxt.js project, Nuxt.js project example, Nuxt.js, web developer, nuxt web application,amazon clone, netflix clone, sale app, nuxt.js project example, nuxt.js, web developer, nuxt web application",
    },
    {
        name: "robots",
        content:" index, follow"
      },
  ],
});
const projectsList = [
  
 
  {
    id: 1,
    name: "IconBuilderAI",
    image: "/projects/iconbuilderai.png",
    viewUrl: "https://youtu.be/-VvroGSEJ_8",
    githubUrl: "https://github.com/karadanay7/IconBuilderAI",
    description: "IconBuilderAi is a web application that allows users to create icons. It is developed using .Net 8, Blazor, OpenAI and TailwindCSS during a bootcamp with ",
    extraLink:"https://www.linkedin.com/in/altudev/"
  },
  {
    id: 2,
    name: "MealMate ",
    image: "/projects/mealmate.png",
    viewUrl: "https://youtu.be/SKZUzoLH1VQ",
    githubUrl: "https://github.com/karadanay7/MealMate",
    description: "MealMate is a web application that allows users to get 7-days meal plan. It is developed using .Net 8, Blazor, OpenAI and TailwindCSS",
  },
  {
    id: 3,
    name: "SaleSpot ",
    image: "/projects/salespot.png",
    viewUrl: "https://youtu.be/vZ2p8w5SZKg",
    githubUrl: "https://github.com/karadanay7/salesapp",
    description: "SaleSpot is a web application that allows stores to create special offers to users. It is developed using Nuxt.js,Pinia, Vuetify, Supabase, Prisma, TailwindCSS, NuxtUI",
  },
  {
    id: 4,
    name: "Hue-Man ",
    image: "/projects/hueman.png",
    viewUrl: "https://www.youtube.com/watch?v=aIKvxXebzGk",
    githubUrl: "https://github.com/karadanay7/hue-man",
    description:"Hue-Man is a web application that allows people stay motivated, track their goals and inspire eachother. It is developed using Nuxt.js,Node.js, Supabase, Prisma, NuxtUI, TailwindCSS",
  },
  {
    id: 5,
    name: "E-commerce website ",
    image: "/projects/butik.png",
    viewUrl: "https://youtu.be/ONhYLiRy6d8",
    githubUrl: "https://github.com/karadanay7/shoppingwebsite",
    description: "It's an example E-commerce website. It is developed using Nuxt.js, Supabase, Prisma, TailwindCSS",
  },
  {
    id: 6,
    name: "Photographer Website Example ",
    image: "/projects/photographer.png",
    viewUrl: "https://verdant-pixie-cc5ea6.netlify.app/",
    githubUrl: "https://github.com/karadanay7/personal-example-1",
    description: "It's an example photographer website. It is developed using Nuxt.js, TailwindCSS",
  },
  {
    id: 7,
    name: "Frog Concept Website",
    image: "/projects/frog.png",
    viewUrl: "https://eloquent-sprinkles-61e90b.netlify.app/",
    githubUrl: "https://github.com/karadanay7/ribbitville",
    description: "It's an example frog concept website. It is developed using Nuxt.js, TailwindCSS",
  },
  {
    id: 8,
    name: "Netflix Clone TV ",
    image: "/projects/netflix-clone.png",
    viewUrl: "https://youtu.be/ep0j7wUJ8rY", 
    githubUrl: "https://github.com/karadanay7/netflix-clone-for-tv",
    description: "It's an example Netflix Clone TV. It is developed using Vue.js,Pinia, TailwindCSS",
  },
  {
    id: 9,
    name: "Aliexpress Clone ",
    image: "/projects/aliexpressclone.png",
    viewUrl: "https://youtu.be/ayB9RhNYKZY", 
    githubUrl: "https://github.com/karadanay7/aliexpress-clone",
    description: "It's an example Aliexpress Clone. It is developed using Nuxt.js, TailwindCSS, Prisma, Supabase, Pinia, Stripe",
  },
  {
    id: 10,
    name: "Threads-Clone ",
    image: "/projects/threads.png",
    viewUrl: "https://youtu.be/ikDtpy4enyo", 
    githubUrl: "https://github.com/karadanay7/threads-clone",
    description: "It's an example Threads Clone. It is developed using Nuxt.js, TailwindCSS, Prisma, Supabase, Pinia",
  },
  {
    id: 11,
    name: "3D Moon and Clouds",
    image: "/projects/moon.png",
    viewUrl: "https://brilliant-gelato-8bccd9.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-moonsky",
    description: "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 12,
    name: "3D DNA",
    image: "/projects/3ddna.png",
    viewUrl: "https://singular-creponne-e6d5bf.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-dna",
    description: "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 13,
    name: "3D- The Mountains",
    image: "/projects/3dmountain.png",
    viewUrl: "https://chic-cascaron-6c87d0.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-mountain",
    description: "It's an example 3D Landing Page. It is developed using Nuxt.js, and Three.js",
  },
  {
    id: 14,
    name: "3D - The Earth",
    image: "/projects/3dearth.png",
    viewUrl: "https://sunny-syrniki-b660e6.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-earth",
    description: "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 15,
    name: "3D Chips",
    image: "/projects/3dchips.png",
    viewUrl: "https://stirring-meerkat-9cc923.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-chips",
    description: "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 16,
    name: "3D Cubes",
    image: "/projects/3dcubes.png",
    viewUrl: "https://statuesque-alfajores-db4fb2.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-cubeboxes",
    description: "It's an example 3D Landing Page. It is developed using Nuxt.js, and Spline Design",
  },
  {
    id: 17,
    name: "Tailor Website - Nuxt.js",
    image: "/projects/terzileyla.png",
    viewUrl: "https://terzileyla.com/",
    githubUrl: "https://github.com/karadanay7/terzileyla",
    description: "It's an example Tailor Website. It is developed using Nuxt.js, TailwindCSS",
  },
  {
    id: 18,
    name: "Holiday Towns of Izmir",
    image: "/projects/holiday.png",
    viewUrl: "https://karadanay7.github.io/holidaytownsofizmirslideshow/",
    githubUrl: "https://github.com/karadanay7/holidaytownsofizmirslideshow",
    description: "It's an example Website. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 19,
    name: "Profile Cards",
    image: "/projects/profilecards.png",
    viewUrl: "https://karadanay7.github.io/profilecards/",
    githubUrl: "https://github.com/karadanay7/profilecards",
    description: "It's an example Profile Cards page. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 20,
    name: "Hamburger Menu",
    image: "/projects/hamburgermenu.png",
    viewUrl: "https://karadanay7.github.io/hamburgermenu/",
    githubUrl: "https://github.com/karadanay7/hamburgermenu",
    description: "It's an example Hamburger Menu. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 21,
    name: "Tell me a joke!!!",
    image: "/projects/tellmeajoke.png",
    viewUrl: "https://karadanay7.github.io/joke-teller-robot/",
    githubUrl: "https://github.com/karadanay7/joke-teller-robot",
    description: "It's an example Joke Teller Robot. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 22,
    name: "Infinite Scroll",
    image: "/projects/infinityscroll.png",
    viewUrl: "https://karadanay7.github.io/Achitecture-Designs-Scroll/",
    githubUrl: "https://github.com/karadanay7/Achitecture-Designs-Scroll",
    description: "It's an example Infinite Scroll page. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 23, 
    name: " Subscription Page",
    image: "/projects/subscriptionpage.png",
    viewUrl: "https://karadanay7.github.io/subscriptionpage/",
    githubUrl: "https://github.com/karadanay7/subscriptionpage",
    description: "It's an example Subscription Page. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 24,
    name: " Quote Generator",
    image: "/projects/quotegenerator.png",
    viewUrl: "https://karadanay7.github.io/quotegenerator/",
    githubUrl: "https://github.com/karadanay7/quotegenerator",
    description: "It's an example Quote Generator. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 25,
    name: "Profile Card",
    image: "/projects/profilecard.png",
    viewUrl: "https://karadanay7.github.io/profilecard/",
    githubUrl: "https://github.com/karadanay7/profilecard",
    description: "It's an example Profile Card page. It is developed using HTML, CSS, JavaScript",
  },
  {
    id: 26,
    name: "Dark Mode",
    image: "/projects/darkmode.png",
    viewUrl: "https://karadanay7.github.io/darkmode/",
    githubUrl: "https://github.com/karadanay7/darkmode",
    description: "It's an example Dark Mode page. It is developed using HTML, CSS, JavaScript",
  },
];
</script>

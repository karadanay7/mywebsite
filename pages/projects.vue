<template>
  <div class="grid gap-12 grid-cols-1 md:grid-cols-2 p-4">
    <div v-for="project in projectsList" :key="project.id">
      <Project
        :name="project.name"
        :image="project.image"
        :viewUrl="project.viewUrl"
        :githubUrl="project.githubUrl"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  meta: [
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
    name: "SaleSpot - Nuxt.js",
    image: "/salespot.jpg",
    viewUrl: "/salespot",
    githubUrl: "https://github.com/karadanay7/salesapp",
  },
  {
    id: 2,
    name: "MealMate - .Net 8, C#, Blazor,OpenAi",
    image: "/mealmate.jpg",
    viewUrl: "/mealmate",
    githubUrl: "https://github.com/karadanay7/MealMate",
  },
  {
    id: 3,
    name: "E-commerce website - Nuxt.js",
    image: "/butik.png",
    viewUrl: "/e-commerce",
    githubUrl: "https://github.com/karadanay7/shoppingwebsite",
  },
  {
    id: 4,
    name: "Photographer Website Example - Nuxt.js",
    image: "/photographer.png",
    viewUrl: "https://verdant-pixie-cc5ea6.netlify.app/",
    githubUrl: "https://github.com/karadanay7/personal-example-1",
  },
  {
    id: 5,
    name: "Frog Concept Website",
    image: "/frog.png",
    viewUrl: "https://eloquent-sprinkles-61e90b.netlify.app/",
    githubUrl: "https://github.com/karadanay7/ribbitville",
  },
  {
    id: 6,
    name: "Netflix Clone TV - Nuxt.js",
    image: "/netflix-clone.png",
    viewUrl: "/netflix-clone", // Assuming internal route
    githubUrl: "https://github.com/karadanay7/netflix-clone-for-tv",
  },
  {
    id: 7,
    name: "Aliexpress Clone - Nuxt.js",
    image: "/aliexpressclone.png",
    viewUrl: "/aliexpress-clone", // Assuming internal route
    githubUrl: "https://github.com/karadanay7/aliexpress-clone",
  },
  {
    id: 8,
    name: "Threads-Clone - Nuxt.js",
    image: "/threads.png",
    viewUrl: "/threads-clone", // Assuming internal route
    githubUrl: "https://github.com/karadanay7/threads-clone",
  },
  {
    id: 9,
    name: "3D Landing Page - Moon and Clouds",
    image: "/moon.png",
    viewUrl: "https://brilliant-gelato-8bccd9.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-moonsky",
  },
  {
    id: 10,
    name: "3D Landing Page - DNA",
    image: "/3ddna.png",
    viewUrl: "https://singular-creponne-e6d5bf.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-dna",
  },
  {
    id: 11,
    name: "3D Landing Page - The Mountains",
    image: "/3dmountain.png",
    viewUrl: "https://chic-cascaron-6c87d0.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-mountain",
  },
  {
    id: 12,
    name: "3D Landing Page - The Earth",
    image: "/3dearth.png",
    viewUrl: "https://sunny-syrniki-b660e6.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-earth",
  },
  {
    id: 13,
    name: "3D Landing Page - Chips",
    image: "/3dchips.png",
    viewUrl: "https://stirring-meerkat-9cc923.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-chips",
  },
  {
    id: 14,
    name: "3D Landing Page - Cubes",
    image: "/3dcubes.png",
    viewUrl: "https://statuesque-alfajores-db4fb2.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-cubeboxes",
  },
  {
    id: 15,
    name: "Tailor Website - Nuxt.js",
    image: "/terzileyla.png",
    viewUrl: "https://terzileyla.com/",
    githubUrl: "https://github.com/karadanay7/terzileyla",
  },
  {
    id: 16,
    name: "Holiday Towns of Izmir",
    image: "/holiday.png",
    viewUrl: "https://karadanay7.github.io/holidaytownsofizmirslideshow/",
    githubUrl: "https://github.com/karadanay7/holidaytownsofizmirslideshow",
  },
  {
    id: 17,
    name: "Profile Cards",
    image: "/profilecards.png",
    viewUrl: "https://karadanay7.github.io/profilecards/",
    githubUrl: "https://github.com/karadanay7/profilecards",
  },
  {
    id: 18,
    name: "Hamburger Menu",
    image: "/hamburgermenu.png",
    viewUrl: "https://karadanay7.github.io/hamburgermenu/",
    githubUrl: "https://github.com/karadanay7/hamburgermenu",
  },
  {
    id: 19,
    name: "Tell me a joke!!!",
    image: "/tellmeajoke.png",
    viewUrl: "https://karadanay7.github.io/joke-teller-robot/",
    githubUrl: "https://github.com/karadanay7/joke-teller-robot",
  },
  {
    id: 20,
    name: "Infinite Scroll",
    image: "/infinityscroll.png",
    viewUrl: "https://karadanay7.github.io/Achitecture-Designs-Scroll/",
    githubUrl: "https://github.com/karadanay7/Achitecture-Designs-Scroll",
  },
  {
    id: 21,
    name: " Subscription Page",
    image: "/subsciptionpage.png",
    viewUrl: "https://karadanay7.github.io/subscriptionpage/",
    githubUrl: "https://github.com/karadanay7/subscriptionpage",
  },
  {
    id: 22,
    name: " Quote Generator",
    image: "/quotegenerator.png",
    viewUrl: "https://karadanay7.github.io/quotegenerator/",
    githubUrl: "https://github.com/karadanay7/quotegenerator",
  },
  {
    id: 23,
    name: "Profile Card",
    image: "/profilecard.png",
    viewUrl: "https://karadanay7.github.io/profilecard/",
    githubUrl: "https://github.com/karadanay7/profilecard",
  },
  {
    id: 24,
    name: "Dark Mode",
    image: "/darkmode.png",
    viewUrl: "https://karadanay7.github.io/darkmode/",
    githubUrl: "https://github.com/karadanay7/darkmode",
  },
];
</script>

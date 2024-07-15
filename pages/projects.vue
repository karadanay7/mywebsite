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
    name: "SaleSpot - Nuxt.js",
    image: "/salespot.jpg",
    viewUrl: "https://youtu.be/vZ2p8w5SZKg",
    githubUrl: "https://github.com/karadanay7/salesapp",
  },
  {
    id: 2,
    name: "MealMate - .Net 8, Blazor, OpenAi",
    image: "/mealmate.jpg",
    viewUrl: "https://youtu.be/SKZUzoLH1VQ",
    githubUrl: "https://github.com/karadanay7/MealMate",
  },
  {
    id: 3,
    name: "Hue-Man | Motivation App - Nuxt.js",
    image: "/hueman.jpg",
    viewUrl: "https://www.youtube.com/watch?v=aIKvxXebzGk",
    githubUrl: "https://github.com/karadanay7/hue-man",
  },
  {
    id: 4,
    name: "E-commerce website - Nuxt.js",
    image: "/butik.png",
    viewUrl: "https://youtu.be/ONhYLiRy6d8",
    githubUrl: "https://github.com/karadanay7/shoppingwebsite",
  },
  {
    id: 5,
    name: "Photographer Website Example - Nuxt.js",
    image: "/photographer.png",
    viewUrl: "https://verdant-pixie-cc5ea6.netlify.app/",
    githubUrl: "https://github.com/karadanay7/personal-example-1",
  },
  {
    id: 6,
    name: "Frog Concept Website",
    image: "/frog.png",
    viewUrl: "https://eloquent-sprinkles-61e90b.netlify.app/",
    githubUrl: "https://github.com/karadanay7/ribbitville",
  },
  {
    id: 7,
    name: "Netflix Clone TV - Vue.js",
    image: "/netflix-clone.png",
    viewUrl: "https://youtu.be/ep0j7wUJ8rY", 
    githubUrl: "https://github.com/karadanay7/netflix-clone-for-tv",
  },
  {
    id: 8,
    name: "Aliexpress Clone - Nuxt.js",
    image: "/aliexpressclone.png",
    viewUrl: "https://youtu.be/ayB9RhNYKZY", 
    githubUrl: "https://github.com/karadanay7/aliexpress-clone",
  },
  {
    id: 9,
    name: "Threads-Clone - Nuxt.js",
    image: "/threads.png",
    viewUrl: "https://youtu.be/ikDtpy4enyo", 
    githubUrl: "https://github.com/karadanay7/threads-clone",
  },
  {
    id: 10,
    name: "3D Landing Page - Moon and Clouds",
    image: "/moon.png",
    viewUrl: "https://brilliant-gelato-8bccd9.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-moonsky",
  },
  {
    id: 11,
    name: "3D Landing Page - DNA",
    image: "/3ddna.png",
    viewUrl: "https://singular-creponne-e6d5bf.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-dna",
  },
  {
    id: 12,
    name: "3D Landing Page - The Mountains",
    image: "/3dmountain.png",
    viewUrl: "https://chic-cascaron-6c87d0.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-mountain",
  },
  {
    id: 13,
    name: "3D Landing Page - The Earth",
    image: "/3dearth.png",
    viewUrl: "https://sunny-syrniki-b660e6.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-earth",
  },
  {
    id: 14,
    name: "3D Landing Page - Chips",
    image: "/3dchips.png",
    viewUrl: "https://stirring-meerkat-9cc923.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-chips",
  },
  {
    id: 15,
    name: "3D Landing Page - Cubes",
    image: "/3dcubes.png",
    viewUrl: "https://statuesque-alfajores-db4fb2.netlify.app/",
    githubUrl: "https://github.com/karadanay7/3D-cubeboxes",
  },
  {
    id: 16,
    name: "Tailor Website - Nuxt.js",
    image: "/terzileyla.png",
    viewUrl: "https://terzileyla.com/",
    githubUrl: "https://github.com/karadanay7/terzileyla",
  },
  {
    id: 17,
    name: "Holiday Towns of Izmir",
    image: "/holiday.png",
    viewUrl: "https://karadanay7.github.io/holidaytownsofizmirslideshow/",
    githubUrl: "https://github.com/karadanay7/holidaytownsofizmirslideshow",
  },
  {
    id: 18,
    name: "Profile Cards",
    image: "/profilecards.png",
    viewUrl: "https://karadanay7.github.io/profilecards/",
    githubUrl: "https://github.com/karadanay7/profilecards",
  },
  {
    id: 19,
    name: "Hamburger Menu",
    image: "/hamburgermenu.png",
    viewUrl: "https://karadanay7.github.io/hamburgermenu/",
    githubUrl: "https://github.com/karadanay7/hamburgermenu",
  },
  {
    id: 20,
    name: "Tell me a joke!!!",
    image: "/tellmeajoke.png",
    viewUrl: "https://karadanay7.github.io/joke-teller-robot/",
    githubUrl: "https://github.com/karadanay7/joke-teller-robot",
  },
  {
    id: 21,
    name: "Infinite Scroll",
    image: "/infinityscroll.png",
    viewUrl: "https://karadanay7.github.io/Achitecture-Designs-Scroll/",
    githubUrl: "https://github.com/karadanay7/Achitecture-Designs-Scroll",
  },
  {
    id: 22,
    name: " Subscription Page",
    image: "/subsciptionpage.png",
    viewUrl: "https://karadanay7.github.io/subscriptionpage/",
    githubUrl: "https://github.com/karadanay7/subscriptionpage",
  },
  {
    id: 23,
    name: " Quote Generator",
    image: "/quotegenerator.png",
    viewUrl: "https://karadanay7.github.io/quotegenerator/",
    githubUrl: "https://github.com/karadanay7/quotegenerator",
  },
  {
    id: 24,
    name: "Profile Card",
    image: "/profilecard.png",
    viewUrl: "https://karadanay7.github.io/profilecard/",
    githubUrl: "https://github.com/karadanay7/profilecard",
  },
  {
    id: 25,
    name: "Dark Mode",
    image: "/darkmode.png",
    viewUrl: "https://karadanay7.github.io/darkmode/",
    githubUrl: "https://github.com/karadanay7/darkmode",
  },
];
</script>

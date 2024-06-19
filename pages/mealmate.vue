<template>
    <div class="h-screen w-full flex justify-center items-center lg:flex-row">
      <video
        class="h-[649px] w-[4800px]"
        src="/0608.mp4"
        controls
        type="video/mp4"
      ></video>
    </div>
  </template>
  <script setup lang="ts">
  useHead({
    title: "MealMate - Personalized AI Meal Planning App ",
   
    meta: [
      {
        name: "description",
        content: " Personalized meal planning app powered by OpenAI.  Built with .NET 8, C#, Blazor, TailwindCSS, and DaisyUI.",
      },
      {
        name: "project-description",
        content:"Personalized meal planning app powered by OpenAI. Tailor your meal preferences, activity level, health issues, goals, weight, height, age, and gender for customized 7-day meal plans. Built with .NET 8, C#, Blazor, TailwindCSS, and DaisyUI."
      },
      {
        name: "keywords",
        content:"meal planning, personalized meal plans, OpenAI, .NET 8, C#, Blazor, TailwindCSS, DaisyUI, dietary preferences, nutrition, health goals, weight management"
      },
      {
        name: "robots",
        content:" index, follow"
      },

    ],
  });
  </script>
  
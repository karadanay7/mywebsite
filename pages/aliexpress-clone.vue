<template>
  <div class="h-screen w-full flex justify-center items-center lg:flex-row">
    <video
      class="h-[649px] w-[4800px]"
      src="/aliexpress-clone.mp4"
      controls
      type="video/mp4"
    ></video>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Aliexpress Clone built with Nuxt.js, Prisma, Supabase, Stripe, Tailwind CSS",
  meta: [
  {
        name: "description",
        content: " Aliexpress Clone built with Nuxt.js, Prisma, Supabase, Stripe, Tailwind CSS, Nuxt.js, web developer, nuxt web application",
      },
    {
      name: "projectdescription",
      content:
        "Aliexpress clone, Aliexpress with nuxt, creating orders,creating address, prisma with nuxt, nuxt with stripe, nuxt with supabase, supabase with nuxt, nuxtjs, google auth with nuxt, nuxt web application",
    },
    {
        name: "robots",
        content:" index, follow"
      },
  ],
});
</script>

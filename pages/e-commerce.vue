<template>
  <div class="h-screen w-full flex justify-center items-center lg:flex-row">
    <video
      class="h-[649px] w-[4800px]"
      src="/0131.mp4"
      controls
      type="video/mp4"
    ></video>
  </div>
</template>
<script setup lang="ts">
useHead({
  meta: [
    {
      name: "projectdescription",
      content:
        "E-commerce website, E-commerce with nuxt, creating orders,creating address, prisma with nuxt, nuxt with stripe, nuxt with supabase, supabase with nuxt, nuxtjs, google auth with nuxt, nuxt web application",
    },
  ],
});
</script>

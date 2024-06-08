<template>
  <div class="h-screen w-full flex justify-center items-center lg:flex-row">
    <video
      class="h-[649px] w-[4800px]"
      controls
      src="/threads-clone.mp4"
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
        "Threads clone, threads-clone,prisma with nuxt, posting threads, supabase with nuxt, nuxtjs, google auth with nuxt, nuxt web application",
    },
    {
        name: "robots",
        content:" index, follow"
      },
    
  ],
});
</script>

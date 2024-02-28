<template>
  <div class="h-screen w-full flex justify-center items-center lg:flex-row">
    <video
      class="h-[649px] w-[4800px]"
      controls
      src="/netflix-clone.mp4"
      type="video/mp4"
    ></video>
  </div>
</template>
<script setup lang="ts">
useHead({
  meta: [
    {
      name: "project:description",
      content:
        "Netflix clone, Netflix nuxt3 project, ,movie streaming,custom streaming platform, nuxt.js, web developer, nuxt web application",
    },
  ],
});
</script>

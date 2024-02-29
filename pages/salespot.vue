<template>
  <div class="h-screen w-full flex justify-center items-center lg:flex-row">
    <video
      class="h-[649px] w-[4800px]"
      controls
      src="/salespot.mp4"
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
        "Sale app, Web app nuxt3 project, ,sale app nuxt.js,nuxt.js project example, nuxt.js, web developer, nuxt web application",
    },
  ],
});
</script>

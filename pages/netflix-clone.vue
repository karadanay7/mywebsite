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
  title: "Netflix Clone built with Vue.js, pinia store and Tailwind CSS",
  meta: [
  {
      name: "description",
      content: " Netflix Clone built with Vue.js, pinia store and Tailwind CSS, Vue.js, web developer, vue.js web application",
    },
    {
      name: "project:description",
      content:
        "Netflix clone, Netflix vue.js project, ,movie streaming,custom streaming platform, vue.js, web developer, vue.js web application",
    },
    {
        name: "robots",
        content:" index, follow"
      },
  ],
});
</script>

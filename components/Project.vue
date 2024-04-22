<template>
  <UCard>
    <template #header>
      <h2 class="text-base sm:text-lg font-semibold text-center">{{ name }}</h2>
    </template>
    <div class="h-60 overflow-hidden">
      <NuxtImg
        v-if="image"
        :src="image"
        alt="projectimg"
        format="webp"
        sizes="100vw  lg:800px"
        loading="lazy"
      />
      <template v-else>
        <!-- Buraya skeleton loader -->
      </template>
    </div>
    <template #footer>
      <div class="flex items-center justify-center gap-4">
        <UButton aria-label="viewButton">
          <NuxtLink
            aria-label="View project page"
            :to="viewUrl"
            target="_blank"
            class="btn btn-view flex items-center"
            ><Icon name="material-symbols:desktop-mac-outline" /><span
              class="hidden md:inline-block ml-2"
              >View</span
            ></NuxtLink
          ></UButton
        >
        <UButton aria-label="githubButton">
          <NuxtLink
            :to="githubUrl"
            aria-label="githubUrl"
            external
            target="_blank"
            class="btn btn-link flex items-center"
          >
            <Icon name="uil:github" /><span class="hidden md:inline-block ml-2"
              >Code</span
            ></NuxtLink
          ></UButton
        >
      </div>
    </template>
  </UCard>
</template>
<script setup lang="ts">
defineProps(["name", "image", "viewUrl", "githubUrl"]);
</script>

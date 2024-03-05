<template>
  <UCard>
    <template #header>
      <h2 class="text-base sm:text-lg font-semibold text-center">{{ name }}</h2>
    </template>
    <div class="h-60 overflow-hidden">
      <NuxtImg
        :src="image"
        loading="lazy"
        alt="projectimage"
        sizes="100vw sm:50vw md:800px"
        format="webp"
      />
    </div>
    <template #footer>
      <div class="flex items-center justify-center gap-4">
        <UButton>
          <NuxtLink
            :to="viewUrl"
            target="_blank"
            class="btn btn-view flex items-center"
            ><Icon name="material-symbols:desktop-mac-outline" /><span
              class="hidden md:inline-block ml-2"
              >View</span
            ></NuxtLink
          ></UButton
        >
        <UButton>
          <NuxtLink
            :to="githubUrl"
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
<script setup>
defineProps(["name", "image", "viewUrl", "githubUrl"]);
</script>

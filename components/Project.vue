<template>
  <UCard>
    <template #header>
      <h2 class="text-base sm:text-lg font-semibold text-center">{{ name }}</h2>
    </template>
    <div class="h-80 overflow-hidden">
      <img :src="image" class="w-full h-full object-contain" />
    </div>
    <template #footer>
      <div class="flex items-center justify-center gap-4">
        <UButton>
          <a :href="viewUrl" class="btn btn-view flex items-center"
            ><Icon name="material-symbols:desktop-mac-outline" /><span
              class="hidden md:inline-block ml-2"
              >View</span
            ></a
          ></UButton
        >
        <UButton>
          <a :href="githubUrl" class="btn btn-link flex items-center">
            <Icon name="uil:github" /><span class="hidden md:inline-block ml-2"
              >Code</span
            ></a
          ></UButton
        >
      </div>
    </template>
  </UCard>
</template>
<script setup>
defineProps(["name", "image", "viewUrl", "githubUrl"]);
</script>

<template>
  <UCard class="flex flex-col justify-between h-full ">
    <template #header>
      <h2 class=" text-lg md:text-2xl  font-semibold text-center p-4">{{ name }}</h2>
    </template>
    <div class="flex flex-col justify-around items-start flex-grow gap-2 ">
      <div class="w-full flex justify-center">
        <NuxtImg
          v-if="image"
          :src="image"
          alt="projectimg"
          format="webp"
          sizes="100vw lg:100vw"
          loading="lazy"
          class="h-full w-full object-contain rounded-lg"
        />
      </div>
      <div class=" h-32   xl:h-32 2xl:h-28 overflow-hidden">
        <p class=" text-sm md:text-base  ">{{ description }} <span>   <NuxtLink
          v-if="extraLink"
          :to="extraLink"
          class="text-base text-blue-500 underline inline-block "
          >Alper Tunga</NuxtLink></span></p>
      
     
      </div>
    </div>
    <template #footer>
      <div class="flex items-center justify-center gap-4 p-4">
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
          ></UButton>
        <UButton aria-label="githubButton">
          <NuxtLink
            :to="githubUrl"
            aria-label="githubUrl"
            external
            target="_blank"
            class="btn btn-link flex items-center"
            ><Icon name="uil:github" /><span
              class="hidden md:inline-block ml-2"
              >Code</span
            ></NuxtLink>
          </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
defineProps(["name", "image", "viewUrl", "githubUrl", "description","extraLink"]);
</script>

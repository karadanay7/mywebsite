<template>
  <UContainer
    class="w-full flex items-center justify-between  bg-transparent"
  >
    <div class="w-1/3">
      <ULink to="/">
        <NuxtImg
          src="/logo-green.png"
          alt="Logo"
          format="webp"
          class="h-8"
          sizes="sm:100vw md:100vw lg:400px"
        />
      </ULink>
    </div>
    <div class="py-2 w-1/3">
      <UButton
        @click="toggleMenu()"
        class="block lg:hidden"
        aria-label="hamburgerButton"
      >
        <Icon
          :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'"
          class="w-4 h-4 text-gray-300 dark:text-gray-900 mt-1"
        />
      </UButton>
    </div>

    <div class="hidden lg:flex w-1/3">
      <UHorizontalNavigation :links="horizontalLinks" />
      <div class="flex items-center justify-center gap-2">
        <UToggle
          v-model="isDark"
          on-icon="i-heroicons-sun"
          off-icon="i-heroicons-moon"
          size="lg"
           class="border-2 border-primary"
        />
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="flex flex-col lg:hidden top-11 absolute z-10 mx-auto left-0 right-0 border rounded-lg text-start bg-white dark:bg-stone-950 border-gray-300 dark:border-gray-600 justify-center py-2 items-center"
    >
      <div class="absolute top-0 w-full flex justify-end items-center"></div>

      <UVerticalNavigation :links="verticalLinks" />
    </div>
    <div class="flex lg:hidden items-center justify-center gap-2">
      <UToggle
  v-model="isDark"
  
  :aria-label="isDark ? 'Dark mode is on' : 'Dark mode is off'"
  on-icon="i-heroicons-sun"
  off-icon="i-heroicons-moon"
  type="button"
  size="lg"
  class="border-2 border-primary"
/>

    </div>
  </UContainer>
</template>
<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "light";
  },
  set() {
    colorMode.preference = colorMode.value === "light" ? "dark" : "light";
  },
});
const horizontalLinks = [
  [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "About",

      to: "/about",
    },
    {
      label: "Projects",

      to: "/projects",
    },
    {
      label: "Blog",

      to: "/blog",
    },
  ],
];
const verticalLinks = [
  [
    {
      label: "Home",

      to: "/",
    },
    {
      label: "About",

      to: "/about",
    },
    {
      label: "Projects",

      to: "/projects",
    },
    {
      label: "Blog",

      to: "/blog",
    },
  ],
];
</script>

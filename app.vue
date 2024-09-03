<template>
  <div>
    <Header class="  " />

    <NuxtPage class="z-0 " />
    <Footer  class="z-30 fixed bottom-0 "/>
  </div>
</template>
<script setup>
const route = useRoute()
const baseUrl = 'https://aysegulk.me' // Ensure this is your correct base URL
const canonicalUrl = `${baseUrl}${route.path}`

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl
    }
  ]
})
</script>
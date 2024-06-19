<template>
  <div>
    <Header />

    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup>
const route = useRoute()
const baseUrl = 'https://www.aysegulk.me' // Ensure this is your correct base URL
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
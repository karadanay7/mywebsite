<template>
  <UContainer class="">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
      <ContentList path="/blog">
        <template #default="{ list }">
          <UCard v-for="article in list" :key="article._path" class="">
            <template #header>
              <h1 class="text-lg text-center">
                {{ article.title }}
              </h1>
            </template>

            <ContentNavigation class="">
              <div
                class="flex flex-col h-72 items-center justify-between overflow-hidden"
              >
                <div class="w-full overflow-hidden h-1/2">
                  <p>{{ article.description }}</p>
                </div>

                <!-- Add a wrapper div for centering -->
                <div class="w-full h-1/2 self-center">
                  <img
                    :src="article.img"
                    alt="blogcontentimg"
                    sizes="100vw sm:50vw md:400px"
                    format="webp"
                    height="auto"
                    width="auto"
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <!-- Apply mx-auto class for center alignment -->
            </ContentNavigation>

            <template #footer>
              <p class="text-sm">
                {{ article.authorname }}
              </p>
              <div class="flex items-center justify-between">
                <time datetime="2020-03-16">{{ article.date }}</time>
                <NuxtLink
                  :to="article._path"
                  class="hover:text-primary hover:scale-110"
                >
                  Go to Read
                  <UIcon
                    name="i-heroicons-arrow-right"
                    class="mb-1 animate-pulse"
                  />
                </NuxtLink>
              </div>
            </template>
          </UCard>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </div>
  </UContainer>
</template>
<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content: "Welcome to my blog!  ",
    },
  ],
});
</script>
<style scoped></style>

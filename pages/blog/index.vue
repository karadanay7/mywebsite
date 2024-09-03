<template>
  <UContainer>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10  p-2 md:p-8">
      <ContentList path="/blog">
        <template #default="{ list }">
          <UCard v-for="article in list" :key="article._path">
            <template #header>
              <h1 class="text-lg text-center">{{ article.title }}</h1>
            </template>

            <ContentNavigation>
              <div class="flex flex-col h-80 overflow-hidden">
                <p class="pb-4">{{ article.description }}</p>
                <div
                  class="flex justify-center items-center h-full w-full overflow-hidden"
                >
                  <NuxtImg
                    :src="article.img"
                    alt="blogcontentimg"
                    sizes="500px  lg:600px"
                    format="webp"
                    class="w-full"
                    quality="50"
                  />
                </div>
              </div>
            </ContentNavigation>

            <template #footer>
              <div class="flex flex-cols-2 justify-between">
                <div class="flex flex-col items-center justify-center">
                  <p class="text-sm">{{ article.authorname }}</p>
                  <time datetime="2020-03-16">{{ article.date }}</time>
                </div>
                <div class="flex items-center justify-center">
                  <ULink
                    :to="article._path"
                    class="hover:text-primary hover:scale-110"
                  >
                    Go to Read
                    <UIcon
                      name="i-heroicons-arrow-right"
                      class="-mb-[3px] animate-pulse text-lg"
                    ></UIcon>
                </ULink>
                </div>
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
  title: "Aysegul Karadan - Full-Stack Developer | Nuxt.js, Vue.js, Node.js",
  meta: [
  {
      name: "description",
      content: "Welcome to my blog! I write about web development, software engineering, engineering, and more.",
    },
    {
      name: "blog:description",
      content:
        "Welcome to my blog! , engineering content, developer content, developer blog, web developer blog, engineering blog, blog page, engineering blog page, web developer blog page ",
    },
    {
        name: "robots",
        content:" index, follow"
      },
  ],
});
</script>

<style scoped></style>

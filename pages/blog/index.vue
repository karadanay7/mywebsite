<template>
  <UContainer>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10  p-2 md:p-8">
      <ContentList path="/blog">
        <template #default="{ list }">
          <UCard v-for="article in sortedPosts" :key="article._path">
            <template #header>
              <h1 class="text-lg text-center">{{ article.title }}</h1>
            </template>

            <ContentNavigation>
              <div class="flex flex-col h-80 overflow-hidden">
                <p class="pb-4">{{ article.description }}</p>
                <div class="flex justify-center items-center h-full w-full overflow-hidden">
                  <NuxtImg
                    :src="article.img"
                    alt="blogcontentimg"
                    sizes="500px lg:600px"
                    format="webp"
                    class="w-full"
                    quality="50"
                  />
                </div>
              </div>
            </ContentNavigation>

            <template #footer>
              <div class="flex justify-between">
                <div class="flex flex-col items-center">
                  <p class="text-sm">{{ article.authorname }}</p>
                  <time :datetime="article.date">{{ formatDate(article.date) }}</time>
                </div>
                <div class="flex items-center">
                  <ULink :to="article._path" class="hover:text-primary hover:scale-110">
                    Go to Read
                    <UIcon name="i-heroicons-arrow-right" class="-mb-[3px] animate-pulse text-lg"></UIcon>
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

<script setup>



const { data: sortedPosts } = await useAsyncData('all-blogs', () => {
  return queryContent('blog').find().then(posts => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  });
});


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

useHead({
  title: "Aysegul Karadan - Blog",
  meta: [
    {
      name: "description",
      content: "Welcome to my blog! I write about web development, software engineering, and more.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
});

</script>

<style scoped></style>

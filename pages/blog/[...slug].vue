<template>
  <main>
    <UContainer class="p-4">
      <UCard>
        <!-- Display the current blog post -->
        <ContentDoc v-if="currentBlog" :document="currentBlog" />
      </UCard>
    </UContainer>

    <div class="flex flex-col items-center justify-center gap-4 p-4">
      <h1 class="text-2xl">Contact With me</h1>
      <div>
        <NuxtLink
          target="_blank"
          to="https://www.linkedin.com/in/aysegulkaradan"
          class="icons mx-4"
          alt="linkedin"
        >
          <Icon name="uil:linkedin" size="50" class="hover:text-primary" />
        </NuxtLink>
        <NuxtLink
          target="_blank"
          to="mailto:hello@aysegulk.me"
          class="icons mx-4"
          alt="mailto"
        >
          <Icon name="uil:envelope" size="50" class="hover:text-primary" />
        </NuxtLink>
        <a
          target="_blank"
          href="https://github.com/karadanay7"
          class="icons mx-4"
          alt="github"
        >
          <Icon name="uil:github" size="50" class="hover:text-primary" />
        </a>
      </div>
    </div>

    <!-- List of blog posts sorted by date -->
    <div class="p-4">
      <h2 class="text-xl">Latest Blog Posts</h2>
      <ul>
        <li v-for="post in sortedPosts" :key="post._path" class="my-4">
          <NuxtLink :to="post._path">
            <h3 class="text-lg">{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <p>{{ formatDate(post.date) }}</p>
            <!-- Format date here -->
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
const { path } = useRoute();

const { data: currentBlog } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

useHead({
  meta: [
    ...(currentBlog.value?.head.meta || []),
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
});
</script>

<style scoped></style>

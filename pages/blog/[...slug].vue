<template>
  <main>
    <UContainer class="p-4"> <ContentDoc /></UContainer>
    <div class="flex flex-col items-center justify-center gap-4 p-4">
      <h1 class="text-2xl">Contact With me</h1>
      <div class="">
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
  </main>
</template>
<style scoped></style>
<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

useHead({
  title: data.value.title,
  meta: data.value.head.meta,
});
</script>

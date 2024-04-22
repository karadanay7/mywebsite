---
authorname: Aysegul Karadan

title: "Nuxt3 Content Module"
img: /img/nuxtcontent/nuxt.png
date: 07/19/2023
description: "Unlock the Potential of Nuxt 3 Content Module: Transform Your Website into a Dynamic Content Hub"
head:
  meta:
    - name: "keywords"
      content: "Nux3 Content Module, Dynamic websites, Static site management, Blogging platform, E-commerce product catalog, User friendly API, User exprerience"

    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/nuxt-content-module
---

# Building a Dynamic Blog with Nuxt 3 Content Module

 <h2>Power of Nuxt 3 Content Module for Dynamic Websites</h2>

<br/>The Nuxt 3 Content module is a powerful feature in the Nuxt.js framework that allows you to manage and render static or dynamic content in your applications. It offers a user-friendly API for managing content and seamlessly integrates with Nuxt's static site generation capabilities. With the Nuxt 3 Content module, you can create efficient and dynamic websites for various use cases.

<h2>Use Cases</h2>

The Nuxt 3 Content module can be used for:

1- Building a robust and customizable blogging platform.

2- Creating a comprehensive documentation website.

3- Enhancing e-commerce websites with a dynamic product catalog.

4- Empowering news or magazine websites with efficient content management.

5- Showcasing projects and experiences on a portfolio or personal website.

<h1>Getting Started</h1>

To use the Nuxt 3 Content module in your Nuxt app, follow these steps:

1. Install the Nuxt Content module by running the following command:

```shell
yarn  add  --dev  @nuxt/content
```

2. Configure the Nuxt Content module in your nuxt.config.ts file by adding the following code:

```shell

export  default  defineNuxtConfig({
//  Other  Nuxt  configuration  options...
modules: ["@nuxt/content"],
})

```

3. Create a content directory in the root of your project. If you're creating a blog component, create a blog directory inside the content directory. Then, inside the blog directory, create your Markdown files or JSON files (e.g., my-first-post.md, my-second-post.md).

4. Inside the pages directory, create a folder named blog. Then, create an index.vue and [...slug].vue pages.

5. In the index.vue page, add the following code to list all blog posts:

```vue
<template>
  <div>
    <Contentlist path="/blog" v-slot="{ list }">
      <div v-for="post in list" :key="post._path">
        <p>{{ post.title }}</p>
        <nuxt-link :to="post._path">
      </div>
    </ContentList>
  </div>
</template>
```

6. To render individual blog posts, use the [...slug].vue page with the
   ContentRenderer component. Add the following code to the [...slug].vue page

```vue
<template>
  <ContentRenderer v-if="data" :value="data" />
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
```

By following these steps, you can effectively utilize the Nuxt 3 Content
module to manage and render your content, catering to various use cases and
creating dynamic and engaging websites.

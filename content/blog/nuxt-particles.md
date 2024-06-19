---
authorname: Aysegul Karadan

title: "Using nuxt-particles/tsparticles with Nuxt "
img: /img/nuxtparticles/1.jpg
date: 11/03/2024
description: "Discover how to integrate dynamic particle backgrounds using tsparticles with Nuxt.js. Follow our step-by-step guide to create captivating animations for your website. "
head:
  meta:
    - name: "keywords"
      content: "Nuxt.js, tsparticles, animation, particles, backgorund animation, nuxt ui, nuxt tsparticles, how to use tsparticles with nuxt, nuxt tsparticles, nuxt3 tsparticles, muxt.js tsparticles, how to use tsparticles with nuxt.js, how to use tsparticles with nuxt3 , ts-particles, ts-particles eith nuxt, nuxt-particles, nuxt-particles for nuxt, nuxtparticles, nuxt particles"

    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/nuxt-particles
---
# Elevate Your Nuxt.js Website with Dynamic Particle Backgrounds: A Step-by-Step Guide

<div class="flex flex-col items-center justify-center  p-2">
  <img src="/img/nuxtparticles/1.jpg" style="width: 100%; height: 200px; object-fit: cover;" class="rounded-lg">

</div>




Are you looking to add an eye-catching element to your Nuxt.js website? Look no further! In this post, we'll walk you through the process of integrating dynamic particle backgrounds using tsparticles with Nuxt.js.<br/>



## Step 1: Installation

The first step is to install the necessary package. Simply use npm or yarn to install nuxt-particles:

```bash
npm install --save-dev nuxt-particles
```

or

```bash
yarn add -D nuxt-particles

```

## Step 2: Configuration

After installation, you'll need to configure Nuxt.js to use the particles module. Update your nuxt.config.ts file as follows:

```bash
export default defineNuxtConfig({
  modules: [
    // Other modules...
    "nuxt-particles",
  ],
});

```

## Step 3: Implementation

Now, let's implement the particle background in your Nuxt.js template:

```bash
<template>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad"></NuxtParticles>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";

const options = {
  // Particle options...
};

const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 2000);
};
</script>

```

## Example Code

You can find an example of this implementation at (https://github.com/karadanay7/mywebsite)
This example includes the particle customization options which can guide you to the particles.

```bash
<template>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad">
  </NuxtParticles>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";
// See tsParticles documentation for all available options
const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },

  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 10,
      },
      repulse: {
        distance: 100,
      },
    },
  },

  particles: {
    color: {
      value: "#0ea5e9",
    },
    links: {
      color: "#0ea5e9",
      enable: true,
      distance: "200",
    },
    move: {
      enable: true,
    },
    number: {
      value: 200,
    },
  },
};
const onLoad = (container: Container) => {
  // Do something with the container
  container.pause();
  setTimeout(() => container.play(), 2000);
};
const updateParticleNumber = () => {
  if (process.client) {
    const particleNumber = window.innerWidth < 640 ? 50 : 200; // Adjust the threshold and values as needed
    options.particles.number.value = particleNumber;
  }
};

// Listen for the window resize event
if (process.client) {
  window.addEventListener("resize", updateParticleNumber);

  // Initial call to set the particle number based on the initial screen size
  updateParticleNumber();
}

</script>

<style scoped></style>

```

### Customization Options

You have full control over the appearance and behavior of the particles. Adjust parameters such as color, movement, interactivity, and more to suit your website's aesthetic. You can checkout documentation here [Click here!](https://nuxt-particles.joeypereira.dev/getting-started/setup)

### Conclusion

By following these simple steps, you can enhance your Nuxt.js website with captivating particle backgrounds, sure to impress your visitors. Experiment with different configurations to achieve the perfect look for your site!

Ready to elevate your web design game? Start integrating tsparticles with Nuxt.js today!

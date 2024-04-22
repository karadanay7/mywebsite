<template>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad">
  </NuxtParticles>

  <div class="flex flex-row flex-wrap h-[calc(100vh_-_105px)]">
    <div
      class="w-full lg:basis-1/2 flex flex-col gap-5 justify-center p-8 lg:p-4"
    >
      <div
        class="flex flex-col items-start justify-center pt-0 lg:pt-32 gap-5 lg:pl-12"
      >
        <h2 class="text-lg md:text-xl lg:text-2xl">Aysegul Karadan</h2>
        <h1 class="text-3xl md:text-4xl lg:text-6xl">
          Web Developer & Industrial Engineer
        </h1>

        <p>
          I'm Ayşegül Karadan, a Full-Stack Developer with a passion for
          crafting captivating digital experiences. With a background in
          industrial engineering and specialization in frontend technologies
          like Vue.js and Nuxt.js, I merge creativity with code to optimize user
          interfaces and deliver innovative solutions. Let's collaborate and
          shape remarkable web experiences together!
        </p>
        <UButton><NuxtLink to="/projects">See Projects</NuxtLink></UButton>
        <div class="flex pt-8 items-start gap-6">
          <NuxtLink
            target="_blank"
            external
            to="https://www.linkedin.com/in/aysegulkaradan/"
            alt="linkedin"
            aria-label="connect with linkedin"
          >
            <UIcon
              name="i-uil-linkedin"
              class="text-5xl hover:text-primary"
              dynamic
            />
          </NuxtLink>
          <NuxtLink
            target="_blank"
            external
            to="mailto:karadan.ay7@gmail.com"
            alt="mailto"
            aria-label="connect with mail"
          >
            <UIcon
              name="uil:envelope"
              class="text-5xl hover:text-primary"
              dynamic
            />
          </NuxtLink>
          <NuxtLink
            target="_blank"
            alt="github"
            external
            to="https://github.com/karadanay7"
            aria-label="connect with github"
          >
            <UIcon
              name="uil:github"
              class="text-5xl hover:text-primary"
              dynamic
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
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
  container.play();
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
useHead({
  meta: [
    {
      name: "index:description",
      content: "Welcome to my website! ",
    },
    // You can add more meta tags as needed, for example:
    {
      name: "keywords",
      content:
        "full-stack web developer, Nuxt.js, Vue.js, web applications, Node.js, Express, ECMAScript, HTML, CSS, JavaScript",
    },
    {
      name: "index:keywords",
      content:
        "frontend developer, frontend developer freelancer, freelancer frontend, freelancer web developer, frontend freelancer, frontend contractor, hire frontend freelancer, find frontend freelancer, vuejs developer, junior vue.js developer, talented vuejs developer, nuxt developer, nuxt.js developer ",
    },
    {
      name: "author",
      content: "Aysegul Karadan",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});
</script>

<style scoped></style>

<template>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />

  <div class="flex flex-col lg:flex-row h-[calc(100vh_-_105px)]">
    <!-- Left Section -->
    <div class="w-full lg:basis-1/2 flex flex-col gap-5 justify-center p-8 lg:p-4">
      <div class="flex flex-col items-start justify-center pt-0 lg:pt-24 gap-5 lg:pl-12">
        <h2 class="ext-xl md:text-2xl lg:text-3xl">Aysegul Karadan</h2>
        <h1 class="text-3xl md:text-4xl lg:text-6xl">Full-Stack Developer</h1>

        <p>
          As a Full-Stack Developer with a solid background in industrial engineering and expertise in technologies like Vue.js, Nuxt.js, .NET, and Blazor, I am passionate about crafting impactful digital experiences. I specialize in both frontend and backend technologies, leveraging my skills to build innovative web solutions.
        </p>

        <UButton size="lg" class="text-xl"><NuxtLink to="/projects">See Projects</NuxtLink></UButton>

        <div class="flex pt-8 items-start gap-6">
          <NuxtLink target="_blank" external to="https://www.linkedin.com/in/aysegulkaradan/" aria-label="Connect on LinkedIn">
            <UIcon name="i-uil-linkedin" class="text-5xl hover:text-primary" dynamic />
          </NuxtLink>
          <NuxtLink target="_blank" external to="mailto:karadan.ay7@gmail.com" aria-label="Email me">
            <UIcon name="uil:envelope" class="text-5xl hover:text-primary" dynamic />
          </NuxtLink>
          <NuxtLink target="_blank" external to="https://github.com/karadanay7" aria-label="Visit my GitHub">
            <UIcon name="uil:github" class="text-5xl hover:text-primary" dynamic />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="w-full lg:basis-1/2 flex flex-col justify-center p-8 lg:p-4 ">
      <h3 class="text-xl md:text-2xl lg:text-3xl mb-4">Skills & Expertise</h3>
      <ul class="list-disc list-inside mb-8">
        <li>Full-Stack Development with  and Nuxt.js, Vue.js, ASP.NET Core, Blazor</li>
        <li>Frontend Technologies: Vue.js,Blazor,Nuxt.js, TailwindCSS</li>
        <li>Backend Technologies: Node.js, .NET, C#, Javascript</li>
        <li>AI Integration: OpenAI, DALL-E API</li>
        <li>Database Management: PostgreSQL, Supabase, AWS, MongoDB</li>
        <li>Design & UX: Spline, Three.js</li>
       
      </ul>
    
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";

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
      value: 100,
    },
  },
};

const onLoad = (container: Container) => {
  container.play();
};

const updateParticleNumber = () => {
  if (process.client) {
    options.particles.number.value = window.innerWidth < 640 ? 50 : 100;
  }
};

if (process.client) {
  window.addEventListener("resize", updateParticleNumber);
  updateParticleNumber();
}

useHead({
  title: "Aysegul Karadan - Full-Stack Developer | Nuxt.js, Vue.js, Node.js",
  meta: [
    { name: "description", content: "Full-Stack Developer with expertise in Vue.js, Nuxt.js, .NET, and Blazor. Passionate about creating impactful digital experiences." },
    { name: "keywords", content: "full-stack developer, Vue.js, Nuxt.js, web applications, Node.js, .NET, JavaScript, Junior Developer, Expertise Developer, Frontend Developer, Front-end Developer, Full-stack Developer, frontend, backend, developer to hire, innovative developer" },
    { name: "author", content: "Aysegul Karadan" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
  ],
});
</script>

<style scoped>
/* Add any custom styles here */
</style>

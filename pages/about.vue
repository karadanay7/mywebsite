<template>
  <UContainer class="pt-8 h-[calc(100vh_-_105px)] overflow-auto pb-8">
    <div class="flex flex-col gap-10">
      <div
        class="w-full md:w-1/2 flex flex-col items-start justify-between gap-2 text-lg"
      >
        <UBadge
          class="rounded-r-full h-12 w-52 md:h-16 md:w-96 text-3xl md:text-5xl flex items-center justify-end"
          size="lg"
          >About me</UBadge
        >
        <h5>Hi!</h5>
        <h5>I am Aysegul Karadan,</h5>
        <h5>
          a dedicated Full-Stack Web Developer with a unique blend of skills and
          experience that bridges the gap between technology and industrial
          engineering. My journey has been one of continuous learning,
          innovation, and a deep commitment to creating exceptional web
          solutions.
        </h5>
      </div>
      <div class="w-full md:w-1/2">
        <h1 class="text-primary font-bold text-2xl">Technologies & Skills</h1>
        <ul class="list-inside text-lg">
          <!-- Add more skills as needed -->

          <li>
            Frontend <Icon name="tabler:arrow-right" /> HTML5, CSS, JavaScript,
            Vue.js, Nuxt.js, Pinia, Bootstrap, Tailwind CSS, jQuery, UI/UX
            Design
          </li>
          <li>
            Backend <Icon name="tabler:arrow-right" /> Node.js, Express.js,
            MongoDB, Supabase, Amazon Web Services(AWS),Prisma,Stripe
          </li>

          <li>
            Other Skills<Icon name="tabler:arrow-right" /> 3D Website Design,
            Flutter, Time management, Problem-Solving Organizational skills,
            Teamwork abilities, Search Engine Optimization(SEO)
          </li>
        </ul>
        <div class="flex pt-8 items-start gap-6">
          <NuxtLink
            target="_blank"
            to="https://www.linkedin.com/in/aysegulkaradan/"
            alt="linkedin"
            aria-label="connect with linkedin"
          >
            <UIcon
              name="i-uil-linkedin"
              target="_blank"
              class="text-5xl hover:text-primary"
              dynamic
            />
          </NuxtLink>
          <NuxtLink
            target="_blank"
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
  </UContainer>
</template>

<script setup lang="ts"></script>

<style scoped></style>

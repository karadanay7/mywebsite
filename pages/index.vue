<template>
  <div class="relative bg-black  h-full">
    <div class="flex flex-col lg:flex-row h-full ">
      <!-- Left Section -->
      <div class="w-full lg:basis-1/2 flex flex-col gap-5 justify-center p-8 lg:p-4 z-20">
        <div class="flex flex-col items-start justify-center pt-0 md:pt-32 gap-5 lg:pl-12">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-white">Aysegul Karadan</h2>
          <h1 class="text-3xl md:text-4xl lg:text-6xl text-white">Full-Stack Developer</h1>

          <p class="text-white">
            As a Full-Stack Developer with a solid background in industrial engineering and expertise in technologies like Vue.js, Nuxt.js, .NET, and Blazor, I am passionate about crafting impactful digital experiences. I specialize in both frontend and backend technologies, leveraging my skills to build innovative web solutions.
          </p>

          <UButton size="lg" class="text-xl text-white">
            <NuxtLink to="/projects">See Projects</NuxtLink>
          </UButton>

          <div class="flex pt-8 items-start gap-6">
            <NuxtLink target="_blank" external to="https://www.linkedin.com/in/aysegulkaradan/" aria-label="Connect on LinkedIn">
              <UIcon name="i-uil-linkedin" class="text-5xl hover:text-primary text-white" dynamic />
            </NuxtLink>
            <NuxtLink target="_blank" external to="mailto:karadan.ay7@gmail.com" aria-label="Email me">
              <UIcon name="uil:envelope" class="text-5xl hover:text-primary text-white" dynamic />
            </NuxtLink>
            <NuxtLink target="_blank" external to="https://github.com/karadanay7" aria-label="Visit my GitHub">
              <UIcon name="uil:github" class="text-5xl hover:text-primary text-white" dynamic />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <!-- <div class="w-full lg:basis-1/2 flex flex-col justify-center p-8 lg:p-4 z-20">
        <h3 class="text-xl md:text-2xl lg:text-3xl mb-4 text-white">Skills & Expertise</h3>
        <ul class="list-disc list-inside mb-8 text-white">
          <li>Full-Stack Development with Nuxt.js, Vue.js, ASP.NET Core, Blazor</li>
          <li>Frontend Technologies: Vue.js, Blazor, Nuxt.js, TailwindCSS</li>
          <li>Backend Technologies: Node.js, .NET, C#, Javascript</li>
          <li>AI Integration: OpenAI, DALL-E API</li>
          <li>Database Management: PostgreSQL, Supabase, AWS, MongoDB</li>
          <li>Design & UX: Spline, Three.js</li>
        </ul>
      </div> -->
    </div>

    <!-- Three.js Component with fixed positioning as a background -->
    <div class="absolute inset-0 w-full h-full z-10 pointer-events-none">
      <Three />
    </div>
  </div>
</template>

<script setup lang="ts">



useHead({
  title: "Aysegul Karadan - Full-Stack Developer | Nuxt.js, Vue.js, Node.js",
  meta: [
    { name: "description", content: "Experienced Full-Stack Developer with expertise in Nuxt.js, Vue.js, Node.js, Supabase, TailwindCSS, .NET, and Blazor. Skilled in AI integration and technical blogging. Passionate about creating impactful digital experiences, " },
    { name: "keywords", content: " Nuxt.js, Vue.js, web applications, Node.js, .NET, JavaScript, Junior Developer, Expertise Developer, Frontend Developer, Full-stack Developer, frontend, backend, developer to hire, innovative developer, TailwindCSS, Supabase, AI integration, developer, development, web developer, web development, web developers near me, web development services, website developer, website designer, Aysegul Karadan, Full-Stack Web Developer, Nuxt.js, Vue.js, HTML5, CSS, JavaScript, Tailwind, Bootstrap, EcmaScript, Pinia, Web Development, UI/UX  ,Freelance Web Developer,Freelance full-stack Web Developer, Web Development Services, Full-Stack Developer, Custom Web Solutions, Responsive Web Design, Cross-Platform Development, User-Centric Web Design, Code Optimization, Back-End Development, Front-End Development, UI/UX Design Expert, Web development services,Web developers near me, Problem-Solving Developer, Efficient Data Handling, Modern Database Toolkit, Node.js Expertise, Express Framework, Clean and Efficient Code, Cutting-Edge Technologies, Continuous Learning, Tailwind CSS Specialist, Bootstrap Framework, EcmaScript Proficiency, Pinia Framework, Web Application Development, Cross-Browser Compatibility, SEO-Friendly Websites, Mobile-Friendly Development, Interactive Web Solutions, Custom Web Applications,Web developer, web development,web design and development, web development services, full stack developer, full stack engineer, freelance web developer, freelance software developer, freelance app developers, web developer freelance, freelancer, website, website builder, website design, UI/UX design, developer, dwveloper, development, app, application, netflix, aliexpress, threads, software engineer, web design, web dev , web coding, full stack dev, engineer, freelance, freelancer, talented developer, best junior developer, junior web developer, junior frontend developer, junior full-stack developer, vue.js developer, vue developer, nuxt.js developer, nuxt deeveloper, junior nuxt developer, junior vue developer, junior full-stack nuxt developer, junior full-stack vue, junior frontend nuxt developer, junior frontend vue developer, junior full-stack, hire full-stack developer, hire web developer, hire nuxt developer, hire vue developer, hire junior developer, hire junior web developer, hire junior nuxt developer, hire junior vue developer, hire junior full-stack developer, hire junior full-stack web developer, hire junior full-stack nuxt developer, hire junior full-stack vue developer, hire junior frontend developer, hire junior frontend web developer, hire junior frontend nuxt developer, hire junior frontend vue developer, best developer website, best developer portfolio, portfolio website, best developer portfolio, best developer portfolio website" },
    { name: "author", content: "Aysegul Karadan" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
    // Open Graph / Facebook
    { property: "og:title", content: "Aysegul Karadan - Full-Stack Developer | Nuxt.js, Vue.js, Node.js" },
    { property: "og:description", content: "Experienced Full-Stack Developer with expertise in Nuxt.js, Vue.js, Node.js, Supabase, TailwindCSS, .NET, and Blazor. Skilled in AI integration and technical blogging." },
    { property: "og:type", content: "profile" },
    { property: "og:site_name", content: "Aysegul Karadan" },
    // LinkedIn
    { property: "linkedin:title", content: "Aysegul Karadan - Full-Stack Developer | Nuxt.js, Vue.js, Node.js" },
    { property: "linkedin:description", content: "Experienced Full-Stack Developer with expertise in Nuxt.js, Vue.js, Node.js, Supabase, TailwindCSS, .NET, and Blazor. Skilled in AI integration and technical blogging." },
    { property: "linkedin:image", content: "https://media.licdn.com/dms/image/v2/D4D03AQFRJMq5JYbxXA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720024331818?e=1730937600&v=beta&t=QznkzaayQnKwmV-gosZv2BRWoKsBMcy6mquFqb6DMuY" }, // Replace with URL to your profile image
    { property: "linkedin:url", content: "https://www.linkedin.com/in/aysegulkaradan/" }, // Replace with your profile URL
    // Additional Meta Tags
    { property: "og:locale", content: "en_US" },
    { property: "og:region", content: "TR" },
    { name: "application-name", content: "Aysegul Karadan" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "theme-color", content: "#ffffff" },
    // Replace with your Google site verification code if applicable
  ],
});
</script>

<style scoped>
/* Ensure content is not covered by Spiderman component */
section {
  position: relative;
  z-index: 20;
  /* Ensure content is above the Spiderman component */
}

.linear-wipe-hero {
  background: linear-gradient(to right, #ebebf0 20%, rgb(172, 35, 35) 40%, rgb(28, 27, 27) 60%, #000000 80%);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

/* Additional styling if needed */
</style>

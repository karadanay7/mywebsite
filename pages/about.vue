<template>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex items-center justify-center gap-4">
      <img
        src="/ico-green.png"
        alt="Aysegul Karadan"
        class="w-16 h-16 md:w-32 md:h-32 mx-auto"
      />
      <div>
        <h1 class="text-2xl md:text-5xl font-bold">Aysegul Karadan</h1>
        <h2 class="text-xl md:text-4xl text-center">Full Stack Developer</h2>
      </div>
    </div>
    <div class="p-4">
      <p class="text-lg text-center max-w-[1000px]">
        I am a Full Stack Developer with a strong portfolio of impactful web
        applications. Proficient in technologies like Nuxt.js, Vue.js, Node.js,
        Supabase, and TailwindCSS, I am currently developing solutions using
        .NET and Blazor. My expertise extends to creating innovative solutions,
        including AI integration and technical blogging. With a recently
        completed MSc in Industrial Engineering, I am eager to apply my
        creativity and technical acumen in a dynamic Full Stack Developer role
        to drive successful project outcomes.
      </p>
    </div>
    <div class="flex justify-center gap-10">
      <NuxtLink
        target="_blank"
        external
        to="https://www.linkedin.com/in/aysegulkaradan/"
        aria-label="Connect on LinkedIn"
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
        aria-label="Email me"
      >
        <UIcon
          name="uil:envelope"
          class="text-5xl hover:text-primary"
          dynamic
        />
      </NuxtLink>
      <NuxtLink
        target="_blank"
        external
        to="https://github.com/karadanay7"
        aria-label="Visit my GitHub"
      >
        <UIcon name="uil:github" class="text-5xl hover:text-primary" dynamic />
      </NuxtLink>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 justify-center dark:text-gray-100 text-gray-900 md:gap-10 px-8 md:px-20 py-6"
    >
      <div class="shadow-lg rounded-lg w-full max-w-3xl">
        <h3 class="text-2xl md:text-3xl font-bold text-center">
          What I have Built?
        </h3>
        <ul class="text-lg list-disc list-inside">
          <li>
            Developed open-source web applications, including clones of popular
            platforms like Netflix, Threads, AliExpress, and Amazon, using
            Nuxt.js, Node.js, Supabase, and TailwindCSS.
          </li>
          <li>
            Built themed websites and designed 3D landing pages with Spline and
            Three.js.
          </li>
          <li>
            Created projects like MealMate (AI-integrated meal planner),
            Salespot (special offers platform), and Hue-man (motivation app).
          </li>
          <li>
            Published Guess the Card mobile app (Flutter) and currently working
            on an AI Career Match app and a Happy Hours web app.
          </li>
          <li>
            Authored blog posts on coding and engineering with over 70K+ views.
          </li>
          <li>
            Collaborated on IconBuilderAI, an AI-driven icon creation tool
            (Blazor, .NET 8, OpenAI).
          </li>
        </ul>
      </div>
      <div class="shadow-lg rounded-lg w-full max-w-3xl">
        <h3 class="text-2xl md:text-3xl font-bold text-center">Skills</h3>
        <p class="text-lg">
          Full Stack Development, Nuxt.js, Vue.js, Node.js, Supabase,
          TailwindCSS, .NET, Blazor, AI Integration, Technical Blogging, 3D
          Design (Spline, Three.js), Project Management
        </p>
        <ul class="list-inside mb-8">
          <li>
            Full-Stack Development with Vue.js, Nuxt.js, ASP.NET Core, Blazor
          </li>
          <li>Frontend Technologies: Vue.js, Blazor, Nuxt.js, TailwindCSS</li>
          <li>Backend Technologies: Node.js, .NET, C#, JavaScript</li>
          <li>AI Integration: OpenAI, DALL-E API</li>
          <li>Database Management: PostgreSQL, Supabase, AWS, MongoDB</li>
          <li>Design & UX: Spline, Three.js</li>
        </ul>
      </div>
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
      value: "#22c55e",
    },
    links: {
      color: "#22c55e",
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
    options.particles.number.value = window.innerWidth < 640 ? 25 : 100;
  }
};

if (process.client) {
  window.addEventListener("resize", updateParticleNumber);
  updateParticleNumber();
}
useHead({
  title: "Aysegul Karadan - Junior Full-Stack Developer for Hire",
  meta: [
    {
      name: "description",
      content:
        "Aysegul Karadan: Talented junior full-stack developer for hire. Expertise in Nuxt.js, Vue.js, Node.js, .NET, and Blazor. Seeking entry-level opportunities to contribute innovative solutions and grow in a dynamic tech environment.",
    },
    {
      name: "keywords",
      content:
        "full-stack developer, Nuxt.js, Vue.js, web applications, Node.js, .NET, JavaScript, Junior Developer, Entry-Level Developer, Graduate Developer, Developer for Hire, Frontend Developer, Backend Developer, Full-stack Developer, Software Engineer, Web Developer, Coding Bootcamp Graduate, Career Transition to Tech, New Grad Developer, Junior Programmer, Entry-Level Programmer, Junior Software Engineer, Junior Web Developer, Aspiring Developer, Tech Talent, Fresh Graduate in Computer Science, Innovative Developer, AI Enthusiast, TailwindCSS, Supabase, AI integration, .NET Developer, Blazor Developer, C# Programmer, TypeScript Developer, React Developer, Angular Developer, Mobile App Developer, Cloud Computing, DevOps Enthusiast, Agile Methodologies, Test-Driven Development, UI/UX Design, Responsive Web Design, Cross-Browser Compatibility, Version Control, Git, GitHub, Continuous Integration, Continuous Deployment, Code Optimization, Web Performance, SEO Best Practices, Accessibility Standards, Progressive Web Apps, Serverless Architecture, Microservices, Docker, Kubernetes, Machine Learning Enthusiast, Blockchain Basics, IoT Development, Cybersecurity Awareness, Problem-Solving Skills, Team Player, Fast Learner, Passionate about Technology, Open to Relocation, Remote Work, Hybrid Work Model, Internship Opportunities, Entry-Level Positions, Junior Developer Roles, Graduate Schemes in Tech, Mentorship Programs, Code Bootcamp Graduate, Self-Taught Programmer, Junior Full-Stack Developer for Hire, Entry-Level Web Developer Seeking Opportunities, Recent Graduate in Computer Science, Junior Software Engineer Open to New Challenges, Aspiring Tech Professional, Junior Developer with Strong Portfolio, Entry-Level Programmer Ready to Contribute, Fresh Talent in Web Development, Junior Coder Eager to Learn and Grow, New Developer Seeking First Professional Role, Junior Tech Enthusiast for Hire, Entry-Level Full-Stack Developer Available, Recent Bootcamp Graduate Ready for Industry, Junior Developer with Passion for Innovation, Entry-Level Software Engineer Seeking Mentorship, Fresh Web Developer with Modern Tech Stack, Junior Programmer with Strong Problem-Solving Skills, Entry-Level .NET Developer, Junior Vue.js Developer, Entry-Level Node.js Developer, Junior React Developer, Entry-Level JavaScript Developer, Junior C# Developer, Entry-Level Frontend Developer, Junior Backend Developer, Entry-Level Mobile App Developer, Junior Cloud Computing Enthusiast, Entry-Level DevOps Practitioner, Junior AI/ML Developer, Entry-Level Blockchain Developer, Junior IoT Developer, Entry-Level Cybersecurity Enthusiast",
    },
    { name: "author", content: "Aysegul Karadan" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "Aysegul Karadan - Junior Full-Stack Developer for Hire",
    },
    {
      property: "og:description",
      content:
        "Talented junior full-stack developer seeking entry-level opportunities. Expertise in Nuxt.js, Vue.js, Node.js, .NET, and Blazor. Ready to contribute innovative solutions and grow in a dynamic tech environment.",
    },
    { property: "og:type", content: "profile" },
    { property: "og:site_name", content: "Aysegul Karadan" },
    {
      property: "linkedin:title",
      content: "Aysegul Karadan - Junior Full-Stack Developer for Hire",
    },
    {
      property: "linkedin:description",
      content:
        "Talented junior full-stack developer seeking entry-level opportunities. Expertise in Nuxt.js, Vue.js, Node.js, .NET, and Blazor. Ready to contribute innovative solutions and grow in a dynamic tech environment.",
    },
    {
      property: "linkedin:image",
      content:
        "https://media.licdn.com/dms/image/v2/D4D03AQFRJMq5JYbxXA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720024331818?e=1730937600&v=beta&t=QznkzaayQnKwmV-gosZv2BRWoKsBMcy6mquFqb6DMuY",
    },
    {
      property: "linkedin:url",
      content: "https://www.linkedin.com/in/aysegulkaradan/",
    },
    { property: "og:locale", content: "en_US" },
    { property: "og:region", content: "TR" },
    { name: "application-name", content: "Aysegul Karadan" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "theme-color", content: "#ffffff" },
  ],
});
</script>

<style scoped>
/* Add any custom styles here */
</style>

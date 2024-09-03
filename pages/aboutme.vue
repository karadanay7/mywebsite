<template>
    <div class="p-6 max-w-4xl mx-auto min-h-screen">
      <h2 class="text-2xl font-bold mb-4">About Me</h2>
      <p class="mb-6">
        I am an experienced Full-Stack Developer passionate about creating impactful digital experiences. For a detailed overview of my work and achievements, you can view and download my resume below:
      </p>
      
      <!-- Embedded PDF Viewer -->
      <div class="relative mb-4">
        <iframe
          src="/resume.pdf"
          class="w-full h-[600px] border border-gray-300"
          title="Resume"
        >
          This browser does not support PDFs. Please download the PDF to view it: <a href="https://drive.google.com/file/d/17xFK7FQIGCh4AZFYBQU0RybpG9SRVB9y/view?usp=sharing" class="text-blue-500 hover:underline">Download PDF</a>.
        </iframe>
      </div>
  
      <!-- Download Link -->
      <UButton>
        <a href="https://drive.google.com/file/d/17xFK7FQIGCh4AZFYBQU0RybpG9SRVB9y/view?usp=sharing" download class="text-xl">Download My Resume</a>
      </UButton>
    </div>
  </template>
  
  <style scoped>
  /* No additional CSS needed when using Tailwind CSS */
  </style>
  
  <script setup>
  useHead({
  title: "Aysegul Karadan - About Me | Full-Stack Developer Resume",
  meta: [
    { name: "description", content: "Learn more about Aysegul Karadan, a Full-Stack Developer with expertise in Vue.js, Nuxt.js, .NET, and Blazor. View and download my resume to explore my skills and experience." },
    { name: "keywords", content: "Full-Stack Developer, Resume, About Me, Vue.js, Nuxt.js, .NET, Blazor, Web Development, Frontend Developer, Backend Developer, Professional Experience" },
    { name: "author", content: "Aysegul Karadan" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Aysegul Karadan - About Me | Full-Stack Developer Resume" },
    { property: "og:description", content: "Learn more about Aysegul Karadan, a Full-Stack Developer with expertise in Vue.js, Nuxt.js, .NET, and Blazor. View and download my resume to explore my skills and experience." },
    { property: "og:image", content: "URL_TO_AN_IMAGE_REPRESENTING_YOUR_PROFILE_OR_RESUME" },
    { property: "og:url", content: "URL_OF_YOUR_ABOUT_ME_PAGE" },
    { property: "og:type", content: "profile" },
    { property: "twitter:card", content: "summary" },
    { property: "twitter:title", content: "Aysegul Karadan - About Me | Full-Stack Developer Resume" },
    { property: "twitter:description", content: "Learn more about Aysegul Karadan, a Full-Stack Developer with expertise in Vue.js, Nuxt.js, .NET, and Blazor. View and download my resume to explore my skills and experience." },
    { property: "twitter:image", content: "URL_TO_AN_IMAGE_REPRESENTING_YOUR_PROFILE_OR_RESUME" }
  ],
});

  </script>
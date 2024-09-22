<template>
  <UContainer>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-8">
      <ContentList path="/blog">
        <template #default="{ list }">
          <UCard v-for="article in sortedPosts" :key="article._path">
            <template #header>
              <h1 class="text-lg text-center">{{ article.title }}</h1>
            </template>

            <ContentNavigation>
              <div class="flex flex-col h-80 overflow-hidden">
                <p class="pb-4">{{ article.description }}</p>
                <div
                  class="flex justify-center items-center h-full w-full overflow-hidden"
                >
                  <NuxtImg
                    :src="article.img"
                    alt="blogcontentimg"
                    sizes="500px lg:600px"
                    format="webp"
                    class="w-full"
                    quality="50"
                  />
                </div>
              </div>
            </ContentNavigation>

            <template #footer>
              <div class="flex justify-between">
                <div class="flex flex-col items-center">
                  <p class="text-sm">{{ article.authorname }}</p>
                  <time :datetime="article.date">{{
                    formatDate(article.date)
                  }}</time>
                </div>
                <div class="flex items-center">
                  <ULink
                    :to="article._path"
                    class="hover:text-primary hover:scale-110"
                  >
                    Go to Read
                    <UIcon
                      name="i-heroicons-arrow-right"
                      class="-mb-[3px] animate-pulse text-lg"
                    ></UIcon>
                  </ULink>
                </div>
              </div>
            </template>
          </UCard>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </div>
  </UContainer>
</template>

<script setup>
const { data: sortedPosts } = await useAsyncData("all-blogs", () => {
  return queryContent("blog")
    .find()
    .then((posts) => {
      return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    });
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

useHead({
  meta: [
    {
      name: "description",
      content:
        "Welcome to my blog! I write about web development, software engineering, and my diverse project experiences.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "keywords",
      content:
        "web development, full-stack development, Nuxt.js, Vue.js, Node.js, .NET, C#, Blazor, OpenAI, AI integration, JavaScript, TypeScript, TailwindCSS, Supabase, Prisma, responsive design, front-end development, back-end development, API development, database management, software engineering, coding tutorials, tech trends, web performance optimization, UI/UX design, serverless architecture, cloud computing, DevOps, continuous integration, continuous deployment, version control, Git, GitHub, software testing, agile methodologies, project management, tech career advice, programming best practices, code refactoring, web accessibility, SEO optimization, mobile-first development, cross-browser compatibility, progressive web apps (PWAs), state management, RESTful APIs, GraphQL, microservices architecture, containerization, Docker, Kubernetes, cybersecurity, data structures, algorithms, machine learning in web development, blockchain technology, IoT development, web3, decentralized applications (dApps), MealMate, meal planning application, SaleSpot, e-commerce platform, IconBuilderAI, AI-powered icon creation, 3D web experiences, Three.js, Spline Design, Netflix clone, Aliexpress clone, Threads clone, social media applications, 3D landing pages, tailor website, holiday towns showcase, profile card designs, hamburger menu implementations, joke teller applications, infinite scroll techniques, subscription page design, quote generator, dark mode implementation, HTML5, CSS3, JavaScript ES6+, responsive web design, mobile-first approach, web animations, CSS Grid, Flexbox, SASS/SCSS, webpack, Babel, ESLint, Jest, Cypress, Git workflows, CI/CD pipelines, Netlify deployment, GitHub Pages, performance optimization techniques, lazy loading, code splitting, SEO best practices, accessibility standards (WCAG), cross-browser testing, mobile responsiveness, progressive enhancement, graceful degradation, state management (Vuex, Pinia), server-side rendering (SSR), static site generation (SSG), headless CMS integration, API consumption, OAuth implementation, payment gateway integration (Stripe), real-time applications with WebSockets, internationalization (i18n), localization (l10n), A/B testing, analytics integration, error tracking and monitoring, performance profiling, memory leak detection, code documentation best practices, design patterns in JavaScript, functional programming concepts, object-oriented programming in JavaScript, reactive programming with RxJS, WebAssembly basics, PWA implementation, service workers, push notifications, offline-first approach, IndexedDB for offline storage, Web Components, Shadow DOM, Custom Elements, Template literals, ES Modules, dynamic imports, tree-shaking techniques, bundle size optimization, critical CSS extraction, image optimization techniques, SVG animations, Canvas API usage, WebGL basics, AR/VR web experiences, voice user interfaces (VUI), chatbot integration, machine learning model deployment in web apps, WebRTC for real-time communication, Web Audio API for sound processing, Web Bluetooth API for IoT interactions, WebXR for immersive experiences, Web Speech API for voice recognition and synthesis, WebAuthn for passwordless authentication, Web Crypto API for encryption in the browser, WebAssembly System Interface (WASI), WebGPU for high-performance graphics, Web Animations API, Intersection Observer API, Resize Observer API, Page Visibility API, Broadcast Channel API, Payment Request API, Credential Management API, Web Share API, Geolocation API, Device Orientation API, Vibration API, Battery Status API, Network Information API, Web USB API, Web MIDI API, Gamepad API, Pointer Lock API, Fullscreen API, Picture-in-Picture API, Media Session API, Media Capabilities API, Web Authentication API, Web Locks API, Contact Picker API, Content Index API, File System Access API, Idle Detection API, Web NFC API, Screen Wake Lock API, Text Fragment API, Web OTP API, Web Serial API, Web Share Target API, Periodic Background Sync API, Badging API, Native File System API, Shape Detection API, Web Perception Toolkit",
    },
  ],
});
</script>

<style scoped></style>

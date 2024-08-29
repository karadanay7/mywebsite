<template>
      <NuxtParticles id="tsparticles" :options="options" @load="onLoad">
    </NuxtParticles>
    <div class="min-h-screen font-hero tracking-wide p-4 flex flex-col gap-16 items-center justify-center  ">
      <!-- Hero Section -->
      <section class="   flex flex-col items-center justify-start text-center min-h-96 gap-10 pt-8 md:pt-20 animate-slidein">
  <!-- Attention-Grabbing Headline -->
   <div class="flex flex-wrap items-center justify-center px-10 gap-4 linear-wipe-hero">
    <h2 class=" text-4xl md:text-6xl font-extrabold  uppercase tracking-widest  ">
    Be Seen! 
  </h2>
  <h2 class=" text-4xl md:text-6xl  font-extrabold  uppercase tracking-widest  ">
     Be Heard! 
  </h2>
  <h2 class=" text-4xl md:text-6xl  font-extrabold  uppercase tracking-widest ">
    Be Online!
  </h2>
   </div>
 


  <!-- Subheading for Services Offered -->
  <h1 class="text-3xl font-semibold mb-6">
    Custom Crafted Websites for Your Personal Brand, Business, or Blog
  </h1>
  <h2>Let’s Build Something Amazing Together! Contact Us Today.</h2>
    <!-- Call to Action Button -->
  <UButton class="  py-3 px-8  text-xl font-semibold " size="lg" color="primary" variant="solid">
    <NuxtLink to="#contact">Contact Us Now!</NuxtLink>
  </UButton>
  <div>
    <UIcon name="uil:arrow-down" class="text-7xl animate-bounce mt-8 text-primary" />
  </div>
</section>
 <div class="grid grid-cols-1  xl:grid-cols-3 gap-10 items-center justify-center pt-24 ">
  
    <UCard class="max-w-md flex flex-col items-center box" >
        <template #header>
            <h2>Personal Websites</h2>
    </template>
       
        <div>
            <NuxtImg src="/projects/photographer.png" alt="Personal Website" class="h-56 rounded-lg" />
        </div>
        <p class="text-lg">Showcase your portfolio, CV/ Resume, hobbies, or personal brand with a custom-designed website.</p>
    </UCard>
    <UCard class="max-w-md flex flex-col items-center" >
        <template #header>
            <h2>Business Websites</h2>
    </template>
       
    <NuxtImg src="/projects/terzileyla.png" alt="Personal Website" class="h-56 rounded-lg" />
        <p class="text-lg">Enhance your business presence online with a professional site that drives engagement and conversions.</p>
    </UCard>
    <UCard class="max-w-md flex flex-col items-center" >
        <template #header>
            <h2>Blog Websites</h2>
    </template>
       
    <NuxtImg src="/projects/terzileyla.png" alt="Personal Website" class="h-56 rounded-lg" />
    <p class="text-lg">Enhance your business presence online with a professional site that drives engagement and conversions.</p>
    </UCard>
   
   
  
 </div>
 


 


  
     
    
  
      <!-- Pricing Information -->
     
      <div class="text-center flex flex-col min-h-screen gap-10 items-center justify-center">
  <h2 class="text-5xl font-bold linear-wipe">Flexible Pricing Based on Your Needs</h2>
  <p class="text-xl">We offer competitive pricing starting from $500, depending on your project requirements.</p>
  <div class="flex flex-wrap gap-8 justify-center">
    
    <!-- Personal Website -->
    <div class="max-w-md flex flex-col items-center  border rounded-lg border-primary p-2  text-gray-600 dark:text-gray-200 ">
      <h3 class="text-3xl font-semibold  dark:text-white text-gray-800">Starting at <span class="text-green-400">$500</span> </h3>
      <p>Basic personal website with up to 5 pages.</p>
      <p><strong class="dark:text-white text-gray-800">Includes:</strong> Handcrafted design, responsive layout, and essential features.</p>
      <h4 class="text-2xl font-semibold mt-4 dark:text-white text-gray-800">Key Features:</h4>
      <ul class="list-disc text-left">
        <li>Custom design tailored to personal branding</li>
        <li>Responsive layout for optimal viewing on all devices</li>
        <li>Integration of social media links</li>
        <li>Blog or news sections (if needed)</li>
        <li>Contact form or booking system</li>
      </ul>
      <p class="mt-2"><strong class="dark:text-white text-gray-800">Technologies Used:</strong> HTML/CSS, JavaScript, Vue.js/Nuxt.js, SEO tools.</p>
    </div>

    <!-- Business Website -->
    <div class="max-w-md flex flex-col items-center  border rounded-lg border-primary p-2  text-gray-600 dark:text-gray-200 ">
      <h3 class="text-3xl font-semibold">Starting at <span class="text-green-400">$800</span> </h3>
      <p>Professional business website with up to 10 pages.</p>
      <p class="mt-4"><strong class="dark:text-white text-gray-800">Includes:</strong> Custom design, advanced features, and SEO optimization.</p>
      <h4 class="text-2xl font-semibold mt-4">Key Features:</h4>
      <ul class="list-disc text-left">
        <li>Professional design with brand alignment</li>
        <li>Advanced features like e-commerce, booking systems, or service directories</li>
        <li>SEO optimization to improve search visibility</li>
        <li>Content management system for easy updates</li>
        <li>Integration with third-party services (e.g., payment gateways, analytics)</li>
      </ul>
      <p class="mt-2"><strong class="dark:text-white text-gray-800">Technologies Used:</strong> Vue.js/Nuxt.js, Tailwind CSS, Node.js, SEO tools, e-commerce platforms.</p>
    </div>

    <!-- Blog Website -->
    <div class="max-w-md flex flex-col items-center border rounded-lg border-primary p-2  text-gray-600 dark:text-gray-200 ">
      <h3 class="text-3xl font-semibold">Starting at <span class="text-green-400">$600</span> </h3>
      <p>Custom blogging platform with up to 7 pages.</p>
      <p><strong class="dark:text-white text-gray-800">Includes:</strong> Blog management system, user engagement features, and mobile responsiveness.</p>
      <h4 class="text-2xl font-semibold mt-4">Key Features:</h4>
      <ul class="list-disc text-left">
        <li>Blog management system with categories and tags</li>
        <li>Social sharing and commenting functionality</li>
        <li>User-friendly CMS for content updates</li>
        <li>Email subscription and newsletter integration</li>
        <li>Mobile responsiveness</li>
      </ul>
      <p class="mt-2"><strong class="dark:text-white text-gray-800">Technologies Used:</strong> Nuxt.js, Vue.js, Node.js, Tailwind CSS, content management systems.</p>
    </div>
    
    <!-- Custom Web Applications -->
    <div class="max-w-md flex flex-col items-center border rounded-lg border-primary p-2  text-gray-600 dark:text-gray-200 ">
      <h3 class="text-3xl font-semibold mb-4">Let's Contact</h3>
      <h2 class="font-bold">Custom web application with interactive features.</h2>
      <p><strong class="dark:text-white text-gray-800">Includes:</strong> Application development, advanced features, and ongoing support.</p>
      <h4 class="text-2xl font-semibold mt-4">Key Features:</h4>
      <ul class="list-disc text-left">
        <li>Fully tailored application development</li>
        <li>Integration of APIs and third-party services</li>
        <li>Database integration and management</li>
        <li>User authentication and authorization</li>
        <li>Ongoing support and maintenance</li>
      </ul>
      <p class="mt-2"><strong class="dark:text-white text-gray-800">Technologies Used:</strong>  Vue.js/Nuxt.js, RESTful APIs, C# .NET, Blazor, databases (SQL/NoSQL).</p>
    </div>

  </div>
  
  <!-- Pricing Information -->
  <p class="text-lg mt-8">Pricing may vary based on additional factors such as:</p>
  <ul class="list-disc max-w-md items-start text-left">
    <li>Number of Pages</li>
    <li>Complexity of Features</li>
    <li>Design Customization</li>
    <li>Deployment and Maintenance</li>
  </ul>
</div>


  
   
  
      <!-- Frameworks Selection -->
      <!-- <section class=" py-16 px-4">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Choose Your Framework</h2>
          <p class="text-lg mb-12">Select the framework that best fits your project requirements. We work with the latest technologies to ensure optimal performance and scalability.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class=" p-6 rounded-lg shadow-lg">
              <img src="/a.jpg" alt="React" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-4">React</h3>
              <p>Build interactive user interfaces with React’s component-based architecture.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <img src="/a.jpg" alt="Vue.js" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-4">Vue.js</h3>
              <p>Create dynamic and responsive applications with Vue’s progressive framework.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <img src="/a.jpg" alt="Angular" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-4">Angular</h3>
              <p>Develop robust and scalable applications with Angular’s comprehensive framework.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <img src="/a.jpg" alt="Blazor" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-4">Blazor</h3>
              <p>Leverage .NET for interactive web applications with Blazor’s powerful framework.</p>
            </div>
          </div>
        </div>
      </section>
   -->
   
  
      <!-- Contact Form -->
      <section id="contact" class="py-16 px-4">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Contact Me!</h2>
          <p class="text-lg">Ready to start your project or have any questions? Reach out to us, and we'll get back to you as soon as possible.</p>
          <ul class="list-inside mt-6 list-none text-2xl">
            <li>
                <NuxtLink to="mailto:karadan.ay7@gmail.com">
                E-Mail: Send me an email 
                <UIcon name="uil:envelope" class="text-4xl  hover:text-primary mb-1"  dynamic />
            </NuxtLink>
            </li>
            <li>

          <NuxtLink to="https://wa.me/+905523541268 "
            >WhatsApp:  Send me a message on WhatsApp 
            <Icon
              name="logos:whatsapp-icon"
              class="w-8 h-8 text-gray-700 -mt-1 "
          /></NuxtLink>
            </li>
          
     
         
        </ul>
        </div>
      </section>
  
   
    </div>
  </template>
  


<script setup lang="ts">
import type { Container } from "tsparticles-engine";
// See tsParticles documentation for all available options
const options = {
  "fullScreen": {
    "zIndex": -1
  },
  "emitters": [
    {
      "position": {
        "x": -1000, // Start particles off-screen to the left
        "y": 50 // Vertically centered
      },
      "rate": {
        "quantity": 1, // Emit fewer particles at a time
        "delay": 0.5 // Increase delay to reduce the number of particles
      },
      "particles": {
        "move": {
          "direction": "right", // Move particles to the right
          "speed": {
            "min": 0.1,
            "max": 0.2 // Slow and consistent speed
          }
        }
      }
    }
  ],
  "particles": {
    "color": {
      "value": "#34c6eb" // Light color for subtle effect
    },
    "move": {
      "enable": true,
      "direction": "right", // Ensure particles move to the right
      "speed": {
        "min": 0.1,
        "max": 0.3// Slow speed for smooth movement
      }
    },
    "number": {
      "density": {
        "enable": true,
        // Spread particles across a wide area
      },
      "value": 20 // Lower value for fewer particles overall
    },
    "opacity": {
      "value": {
        "min": 0.2,
        "max": 0.4 // Slightly higher opacity for better visibility
      }
    },
    "size": {
      "value": {
        "min": 1,
        "max": 3// Slightly larger particles for better distribution
      },
      "animation": {
        "enable": false
      }
    },
    "shape": {
      "type": "circle" // Simple circle shape
    },
  
  }
};




const onLoad = (container: Container) => {
  // Do something with the container
  container.play();
};
const updateParticleNumber = () => {
  if (process.client) {
    const particleNumber = window.innerWidth < 640 ? 50 : 100; // Adjust the threshold and values as needed
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
  title: "Aysegul Karadan - Full-Stack Developer | Nuxt.js, Vue.js, Node.js",
  meta: [
  {
      name: "description",
      content: "Full-Stack Developer with a passion for crafting captivating digital experiences. Specialization in frontend technologies like Vue.js and Nuxt.js. ",
    },
    {
      name: "index:description",
      content: "Welcome to my website! ", 
    },
    
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
    {
        name: "robots",
        content:" index, follow"
      },
  ],
});
</script>
<style>

.linear-wipe {
  text-align: center;
  
  background: linear-gradient(to right, #ada5e2 20%, rgb(206, 206, 111) 40%, rgb(92, 138, 179) 60%, #d6b0e3 80%);
  background-size: 200% auto;
  
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: shine 3s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
.linear-wipe-hero{
    text-align: center;
  
  background: linear-gradient(to right, #ebebf0 20%, rgb(127, 178, 202) 40%, rgb(9, 76, 134) 60%, #01011f 80%);
  background-size: 200% auto;
  
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: shine 3s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

}


</style>


 
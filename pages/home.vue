<template>
      <NuxtParticles id="tsparticles" :options="options" @load="onLoad">
    </NuxtParticles>
<<<<<<< HEAD
    <div class="min-h-screen font-hero tracking-wide p-4 flex flex-col gap-16 items-center justify-center ">
      <!-- Hero Section -->
      <section class="   flex flex-col items-center justify-start text-center min-h-96 gap-10 pt-8 md:pt-20">
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
    <UIcon name="uil:arrow-down" class="text-7xl animate-bounce mt-8" />
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
     
        <div class=" text-center flex flex-col min-h-screen gap-10 items-center justify-center ">
          <h2 class="text-5xl font-bold linear-wipe">Flexible Pricing Based on Your Needs</h2>
          <p class="text-xl ">We offer competitive pricing starting from $500, depending on your project requirements.</p>
          <div class="flex flex-wrap gap-8 justify-center">
            <div class="max-w-md flex flex-col items-center" >
              <h3 class="text-3xl font-semibold ">Starting at $500</h3>
              <p>Basic personal website with up to 5 pages.</p>
              <p class=""><strong>Includes:</strong> Handcrafted design, responsive layout, and essential features.</p>
            </div>
            <div class="max-w-md flex flex-col items-center" >
              <h3 class="text-3xl font-semibold ">Starting at $800</h3>
              <p>Professional business website with up to 10 pages.</p>
              <p class="mt-4"><strong>Includes:</strong> Custom design, advanced features, and SEO optimization.</p>
            </div>
            <div class="max-w-md flex flex-col items-center" >
              <h3 class="text-3xl font-semibold ">Starting at $600</h3>
              <p>Custom blogging platform with up to 7 pages.</p>
              <p class=""><strong>Includes:</strong> Blog management system, user engagement features, and mobile responsiveness.</p>
            </div>
           
          </div>
          <div class="max-w-md flex flex-col items-center" >
              <h3 class="text-3xl font-semibold mb-4">Let's Contact</h3>
              <p>Custom web application with interactive features.</p>
              <p class=""><strong>Includes:</strong> Application development, advanced features, and ongoing support.</p>
            </div>
          <p class="text-lg">Pricing may vary based on additional factors such as:</p>
          <ul class="list-disc   max-w-md  items-start text-left">
=======
    <div class="min-h-screen ">
      <!-- Hero Section -->
      <section class=" text-white py-20 flex flex-col items-center justify-center text-center h-screen gap-20" >
        <h1 class="text-4xl font-bold mb-4">Tailored Websites for Personal, Business, and Blogs</h1>
        <p class="text-lg mb-6">Crafting unique, engaging websites to fit your personal needs, business goals, or blogging ambitions. From concept to launch, we bring your vision to life.</p>
        <a href="#contact" class="bg-yellow-500 text-black py-2 px-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition">Get Started Today</a>
      </section>
  
      <!-- Services Overview -->
      <section class="py-16 px-4">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Our Website Services</h2>
          <p class="text-lg mb-12">Whether you need a personal site, a business hub, or a blogging platform, we have you covered.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class=" p-6 rounded-lg shadow-lg">
              <img src="/a.jpg" alt="Personal Website" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">Personal Websites</h3>
              <p>Showcase your portfolio, CV/ Resume, hobbies, or personal brand with a custom-designed website.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <img src="/a.jpg" alt="Business Website" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">Business Websites</h3>
              <p>Enhance your business presence online with a professional site that drives engagement and conversions.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <img src="/a.jpg" alt="Blogging Platform" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">Blogging Platforms</h3>
              <p>Start your blogging journey with a platform that is easy to manage and engaging for your readers.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <img src="/a.jpg" alt="Web Application" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">Web Application Development</h3>
              <p>Build interactive and dynamic web applications tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Pricing Information -->
      <section class="bg-gray-500 py-16 px-4">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Flexible Pricing Based on Your Needs</h2>
          <p class="text-lg mb-12">We offer competitive pricing starting from $500, depending on your project requirements.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class=" p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Starting at $500</h3>
              <p>Basic personal website with up to 5 pages.</p>
              <p class="mt-4"><strong>Includes:</strong> Handcrafted design, responsive layout, and essential features.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Starting at $800</h3>
              <p>Professional business website with up to 10 pages.</p>
              <p class="mt-4"><strong>Includes:</strong> Custom design, advanced features, and SEO optimization.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Starting at $600</h3>
              <p>Custom blogging platform with up to 7 pages.</p>
              <p class="mt-4"><strong>Includes:</strong> Blog management system, user engagement features, and mobile responsiveness.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Let's Contact</h3>
              <p>Custom web application with interactive features.</p>
              <p class="mt-4"><strong>Includes:</strong> Application development, advanced features, and ongoing support.</p>
            </div>
          </div>
          <p class="mt-8 text-lg">Pricing may vary based on additional factors such as:</p>
          <ul class="list-disc list-inside mt-4 mx-auto max-w-md">
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
            <li>Number of Pages</li>
            <li>Complexity of Features</li>
            <li>Design Customization</li>
            <li>Deployment and Maintenance</li>
          </ul>
        </div>
<<<<<<< HEAD

  
      <!-- SEO Optimization -->
      <section class="  px-4">
=======
      </section>
  
      <!-- SEO Optimization -->
      <section class=" py-16 px-4">
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">SEO Optimization</h2>
          <p class="text-lg mb-12">Improve your website's visibility and ranking with our comprehensive SEO optimization services.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            <div class=" p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">On-Page SEO</h3>
              <p>Optimize your website’s content and structure to improve search engine rankings.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Off-Page SEO</h3>
              <p>Enhance your site’s authority and visibility through external strategies and backlinks.</p>
            </div>
            <div class=" p-6 rounded-lg shadow-lg">
=======
            <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">On-Page SEO</h3>
              <p>Optimize your website’s content and structure to improve search engine rankings.</p>
            </div>
            <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Off-Page SEO</h3>
              <p>Enhance your site’s authority and visibility through external strategies and backlinks.</p>
            </div>
            <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
              <h3 class="text-xl font-semibold mb-4">Technical SEO</h3>
              <p>Ensure your website’s technical setup is optimized for better indexing and performance.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Frameworks Selection -->
<<<<<<< HEAD
      <section class=" py-16 px-4">
=======
      <section class="bg-gray-500 py-16 px-4">
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
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
  
   
  
      <!-- Contact Form -->
      <section id="contact" class="py-16 px-4">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
<<<<<<< HEAD
          <p class="text-lg">Ready to start your project or have any questions? Reach out to us, and we'll get back to you as soon as possible.</p>
        
=======
          <p class="text-lg mb-12">Ready to start your project or have any questions? Reach out to us, and we'll get back to you as soon as possible.</p>
          <form action="#" method="POST" class="max-w-lg mx-auto  p-8 rounded-lg shadow-lg">
            <div class="mb-4">
              <label for="name" class="block text-left text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" class="w-full p-3 border border-gray-300 rounded-lg" required>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-left text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-lg" required>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-left text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows="4" class="w-full p-3 border border-gray-300 rounded-lg" required></textarea>
            </div>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition">Send Message</button>
          </form>
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
        </div>
      </section>
  
   
    </div>
  </template>
  


<script setup lang="ts">
import type { Container } from "tsparticles-engine";
// See tsParticles documentation for all available options
const options = {
<<<<<<< HEAD
  "fullScreen": {
    "zIndex": -1
=======

  "fullScreen": {
    "zIndex": 1
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
  },
  "emitters": [
    {
      "position": {
<<<<<<< HEAD
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
=======
        "x": 0,
        "y": 30
      },
      "rate": {
        "quantity": 5,
        "delay": 0.15
      },
      "particles": {
        "move": {
          "direction": "top-right",
          "outModes": {
            "top": "none",
            "left": "none",
            "default": "destroy"
          }
        }
      }
    },
    {
      "position": {
        "x": 100,
        "y": 30
      },
      "rate": {
        "quantity": 5,
        "delay": 0.15
      },
      "particles": {
        "move": {
          "direction": "top-left",
          "outModes": {
            "top": "none",
            "right": "none",
            "default": "destroy"
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
          }
        }
      }
    }
  ],
  "particles": {
    "color": {
<<<<<<< HEAD
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
=======
      "value": [
        "#ffffff",
        "#FF0000"
      ]
    },
    "move": {
      "decay": 0.05,
      "direction": "top",
      "enable": true,
      "gravity": {
        "enable": true
      },
      "outModes": {
        "top": "none",
        "default": "destroy"
      },
      "speed": {
        "min": 10,
        "max": 50
      }
    },
    "number": {
      "value": 0
    },
    "opacity": {
      "value": 1
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "animation": {
        "enable": true,
        "speed": 30
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 30
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
      }
    },
    "size": {
      "value": {
<<<<<<< HEAD
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




=======
        "min": 0,
        "max": 2
      },
      "animation": {
        "enable": true,
        "startValue": "min",
        "count": 1,
        "speed": 16,
        "sync": true
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 25
      },
      "enable": true,
      "speed": {
        "min": 5,
        "max": 15
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "speed": {
        "min": -7,
        "max": 7
      }
    },
    "shape": {
      "type": [
        "circle",
        "square",
        "polygon"
      ],
      "options": {
        "polygon": [
          {
            "sides": 5
          },
          {
            "sides": 6
          }
        ]
      }
    }
  
}
  
};
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd
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
<<<<<<< HEAD
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
.box {
    background-image: linear-gradient(120deg, #e0e0e0 0%, #704336 100%);
    inset: 4px;
    border-radius: 16px;
    z-index: 1;

}
@property -aa 
{
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
}
@keyframes rotating 
{
    0% 
    {
        --a : 0deg;
    }
    100% 
    {
        --a : 360deg;
    }
}



</style>
=======
>>>>>>> c7242663d7407267ecafd7097cb45a8dcc16ffdd


 
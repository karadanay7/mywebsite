---
authorname: Aysegul Karadan

title: "Integrating Google Auth with Supabase in Nuxt.js  "
img: /img/supabase-google/16.jpg
date: 23/07/2024
description: "Learn to integrate Google Authentication with Supabase in a Nuxt.js project. This guide covers setting up Supabase Auth with Google, configuring Nuxt.js, and ensuring secure user authentication."
head:
  meta:
    - name: "keywords"
      content: "Supabase Authentication, Google Authentication, Supabase Auth, Google OAuth, Nuxt.js Authentication, Nuxt Google Auth, JavaScript Authentication, Supabase Integration, Nuxt Integration, Secure Authentication, Web Security, OAuth2, Authentication Tutorial, Frontend Development, Nuxt.js Guide, Supabase Guide, Coding Tutorial, Web Development Tips, Developer Blog, Tech Guide"

    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/supabase-google-auth
---

# Integrating Google Authentication with Supabase in a Nuxt.js Project

In this guide, we'll walk through the steps to integrate Google Authentication with Supabase in your Nuxt.js project. Follow these instructions to set up your authentication system efficiently.

## 1. Set Up Supabase


<ol class="list-disc  text-base md:text-lg  ">
 
  <li >Create an Account: If you don’t already have a Supabase account, sign up <a href="https://supabase.com/dashboard/sign-up">here!</a>
  </li>
  <li>Create an Organization and Project: After logging in, create your organization and a new project.
  <img src="/img/supabase-google/1.jpg"  class="rounded h-full mt-4">
  </li>
    <li>Define Project Details: Enter a project name and create a password. Make sure to save this password securely as you’ll need it later. Click “Create New Project.”
  <img src="/img/supabase-google/2.jpg"  class="rounded h-full mt-4">
  </li>
</ol>

## 2. Obtain Supabase Credentials

<ol class="list-disc  text-base md:text-lg ">
 
  <li >Copy Public Key and URL: Once the project is created, copy the public key and URL displayed.
  <img src="/img/supabase-google/3.jpg"  class="rounded h-full mt-4">
  </li>
  <li>Access Project Settings: Go to the left sidebar and click on “Project Settings.”

  <img src="/img/supabase-google/4.jpg"  class="rounded h-full mt-4">
  </li>
    <li>Retrieve Connection String: Navigate to “Database” to get the connection string and copy it.
  <img src="/img/supabase-google/5.jpg"  class="rounded h-full mt-4">
  </li>
</ol>

## 3. Set Up Supabase in Your Nuxt.js Project

<ol class="list-disc text-base md:text-lg ">
 <li>Install Supabase Module: In your Nuxt.js project, install the Supabase module by running:
  </li>

```bash
npm install @nuxtjs/supabase

```

or

```bash
npx nuxi@latest module add @nuxtjs/supabase

```

 <li>Configure Nuxt.js: Open nuxt.config.ts and add @nuxtjs/supabase to the modules section.
  </li>


```bash
export default defineNuxtConfig({
 
  modules: [ "@nuxtjs/supabase"],
 
})
```
 <li>Create Environment File: In the root of your project, create a .env file and add the following variables:
  </li>

  ```bash
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
DATABASE_URL=your_database_url
```

</ol>

## 4. Configure Google Authentication


<ol class="list-disc  text-base md:text-lg ">
 
  <li >Enable Google Provider: In Supabase, go to the left sidebar and select “Authentication,” then click on “Providers.” Enable Google.
  <div class="flex items-center justify-around mt-4">  <img src="/img/supabase-google/6.jpg"  class="rounded h-full mt-4">
   <img src="/img/supabase-google/7.jpg"  class="rounded h-full mt-4">
   </div>
    <img src="/img/supabase-google/8.jpg"  class="rounded h-full  mt-4">

  </li>
  <li>Set Up Google Cloud Console: 

   #### 1-Create a new project in the Google Cloud Console.

  <img src="/img/supabase-google/9.jpg"  class="rounded h-full mt-4">

  #### 2-Select your project and navigate to “APIs & Services” > “Credentials.”
  <img src="/img/supabase-google/10.jpg"  class="rounded h-full mt-4">

  #### 3- Create an OAuth Client ID: 
 <img src="/img/supabase-google/11.jpg"  class="rounded h-full mt-4">
<ol>
<li> Choose “Web Application.”
 <img src="/img/supabase-google/12.jpg"  class="rounded h-full mt-4">
</li>
<li> Add your origin (e.g., http://localhost:3000) and the redirect URI from Supabase.Add your origin (e.g., http://localhost:3000) and the redirect URI from Supabase.
Save the configuration.
 <img src="/img/supabase-google/14.jpg"  class="rounded h-full mt-4">
  <img src="/img/supabase-google/13.jpg"  class="rounded h-full mt-4">
</li>
</ol>
  </li>
  
</ol>

## 5. Implement Authentication in Nuxt.js


<ol class="list-disc  text-base md:text-lg  ">
 
  <li >Create Login Button: Design your own login button in your Nuxt.js page or component.
    <img src="/img/supabase-google/15.jpg"  class="rounded h-full mt-4">
  </li>
  <li>Add Authentication Logic:
In the script setup section of your component, use the following code:

  ```
  <script setup lang="ts">
    const client = useSupabaseClient();
     const login = async (_prov: any) => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  // To check the user
const user = useSupabaseUser()
  </script>
  ```
  </li>
   
</ol>

## Conclusion
By following these steps, you’ll successfully integrate Google Authentication with Supabase in your Nuxt.js project. This setup will provide a secure and efficient way for users to authenticate in your application. Happy coding!
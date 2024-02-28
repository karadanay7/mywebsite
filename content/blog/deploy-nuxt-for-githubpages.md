---
authorname: Aysegul Karadan
title: "Deploying a Nuxt3 project on GitHub Pages"
img: /img/Nuxt3-Github-pages/Picture1.png
date: 21/03/2023
description: "How to deploy a Nuxt3 project for gh-pages"
head:
  meta:
    - name: "keywords"
      content: "nuxt3, deploy, ghpages, nuxtjs"
    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/deploy-nuxt-for-github-pages
---

# Deploying a Nuxt3 project on GitHub Pages

In order to publish this blog project I prepared with Nuxt 3, I went through many sources and finally learned to publish the Nuxt3 project on GitHub Pages. Since it is not available in many places, I will show you.<br>

## Deploying a Nuxt3 project on GitHub Pages involves a few steps:

1. First, you need to generate the static files of your Nuxt3 project. To do this, run the following command:

   For Server Side Rendering (SSR):

   ```bash
   yarn build
   ```

   or

   ```bash
   npm build
   ```

   For Static Generation:

   ```bash
   yarn generate
   ```

   or

   ```bash
   npm generate
   ```

   This will create a `dist` folder in your project directory that contains the generated static files.

2. Next, you need to create a new repository on GitHub to host your project. Make sure to initialize the repository with a README file.

3. Once your repository is created, you need to install the `gh-pages` package. This package allows you to deploy your static files to GitHub Pages. To install the package, run the following command:

   ```bash
   npm install gh-pages --save-dev
   ```

4. After installing `gh-pages`, open your `package.json` file and add the following lines to it:

   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

   This will add a new script named `deploy` to your project, which will deploy your static files to GitHub Pages.

5. Now, you can deploy your Nuxt3 project by running the following command:

   ```bash
   npm run deploy
   ```

6. You need to configure your repository settings to use the `gh-pages` branch as your GitHub Pages source. To do this, go to your repository's settings and scroll down to the GitHub Pages section. From there, select the `gh-pages` branch as your source and save your changes.

7. Finally, DO NOT FORGET to add an empty file named `.nojekyll` to GitHub Pages. I wandered around many sources for a long time, but finally, I was able to publish my page like this.

Once you complete the deployment, your GitHub Pages will look like this:

<div class="flex items-center justify-center"><img src="/img/Nuxt3-Github-pages/Picture1.png" width="350" height="300" class="rounded">
</div>

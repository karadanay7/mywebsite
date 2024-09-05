---
authorname: Aysegul Karadan

title: "Using Vuelidate for Nuxt  "
img: /img/vuelidate/1.png
date: 28/02/2024
description: "Learn how to streamline form validation in your Nuxt.js application using Vuelidate and Nuxt UI components. This guide walks you through the integration process step-by-step, ensuring data integrity and enhancing user experience effortlessly. "
head:
  meta:
    - name: "keywords"
      content: "Vuelidate integration, Nuxt.js, form validation Nuxt, Vuelidate for Nuxt, Vuelidate Nuxt 3, Vuelidate setup, Nuxt UI components, form validation Vuelidate, Nuxt validation, Vuelidate guide, Vuelidate Nuxt.js, Nuxt.js form validation, Vuelidate with Nuxt, Vuelidate tutorial, Nuxt.js validation, Vuelidate in Nuxt 3, using Vuelidate in Nuxt, Vuelidate for Nuxt.js, Vuelidate for Nuxt UI, Vuelidate and Nuxt integration, how to integrate Vuelidate with Nuxt, Vuelidate Nuxt tutorial, Nuxt UI Vuelidate integration, form validation in Nuxt.js, Vuelidate Nuxt setup, Vuelidate for Nuxt UI components, Nuxt form validation Vuelidate, Vuelidate step-by-step guide, using Vuelidate in Nuxt UI, Vuelidate for Nuxt.js forms, Vuelidate for Nuxt 3 forms, integrating Vuelidate in Nuxt.js, Nuxt.js Vuelidate setup guide, Vuelidate for Nuxt 3 UI components, Vuelidate in Nuxt UI forms, Nuxt.js form validation tutorial, Vuelidate and Nuxt.js guide, Vuelidate integration tutorial, how to use Vuelidate with Nuxt UI, Vuelidate Nuxt.js example, Vuelidate form handling Nuxt.js, Vuelidate in Nuxt UI, Nuxt UI form validation, Vuelidate with Nuxt.js examples, Vuelidate for Nuxt.js UI, Vuelidate integration in Nuxt, using Vuelidate in Nuxt UI components, Vuelidate for Nuxt.js validation, Nuxt UI validation Vuelidate, how to use Vuelidate in Nuxt 3, Vuelidate setup in Nuxt, Nuxt.js Vuelidate examples, Vuelidate for Nuxt.js guide, Vuelidate and Nuxt UI components, integrating Vuelidate with Nuxt UI, form validation using Vuelidate in Nuxt, Vuelidate Nuxt UI integration, Vuelidate setup tutorial Nuxt, Vuelidate for Nuxt UI tutorial, Nuxt.js Vuelidate guide, Vuelidate integration Nuxt.js, Vuelidate with Nuxt UI tutorial, Nuxt.js form handling Vuelidate, Vuelidate with Nuxt.js UI components, Vuelidate in Nuxt 3 UI, how to set up Vuelidate in Nuxt, Vuelidate for Nuxt forms tutorial, Nuxt UI form validation Vuelidate, using Vuelidate for form validation in Nuxt.js, Vuelidate for Nuxt.js integration, how to use Vuelidate in Nuxt, Vuelidate Nuxt 3 tutorial, Vuelidate Nuxt UI integration guide, Vuelidate for Nuxt.js UI components, Vuelidate with Nuxt 3 setup, form validation with Vuelidate in Nuxt.js, integrating Vuelidate into Nuxt, Vuelidate setup guide Nuxt.js, Vuelidate for Nuxt 3 forms, how to use Vuelidate with Nuxt.js, Vuelidate tutorial for Nuxt, Vuelidate integration in Nuxt 3, Vuelidate Nuxt tutorial guide, Vuelidate in Nuxt.js forms, Nuxt UI Vuelidate tutorial, using Vuelidate in Nuxt forms, Vuelidate for Nuxt UI setup, Nuxt.js Vuelidate integration tutorial, Vuelidate setup in Nuxt UI, Vuelidate for Nuxt.js forms tutorial, Nuxt.js form validation with Vuelidate, Vuelidate and Nuxt.js integration, Vuelidate for Nuxt 3 UI components, how to use Vuelidate with Nuxt UI, Vuelidate for Nuxt integration, Vuelidate in Nuxt.js tutorial, Nuxt UI Vuelidate integration, Vuelidate and Nuxt forms, setting up Vuelidate in Nuxt UI, Vuelidate for Nuxt 3 guide, Vuelidate tutorial for Nuxt UI, using Vuelidate with Nuxt.js UI components, Vuelidate for Nuxt forms, Vuelidate integration Nuxt.js tutorial, Nuxt.js Vuelidate forms, how to use Vuelidate with Nuxt UI components, Vuelidate Nuxt.js tutorial guide, integrating Vuelidate into Nuxt forms, Vuelidate for Nuxt 3 validation, Vuelidate with Nuxt setup guide, Nuxt.js Vuelidate integration guide, using Vuelidate for forms in Nuxt, Vuelidate in Nuxt UI tutorial, Vuelidate for Nuxt.js UI tutorial, Nuxt UI form handling Vuelidate"
   


    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/vuelidate-with-nuxt
---

# Using Vuelidate with Nuxt UI in a Nuxt.js Application

In this guide, we'll walk through setting up Vuelidate for form validation in a Nuxt.js application using Nuxt UI components. Nuxt UI provides a set of UI components that integrate seamlessly with Nuxt.js, making it easier to build beautiful user interfaces. We'll also integrate Vuelidate for form validation to ensure data integrity and improve user experience.<br>
<br>

<div class="flex  items-center justify-center ">  <img src="/img/vuelidate/1.png" width="400"  class="rounded"></div>

## Setup Nuxt UI

First, let's set up Nuxt UI along with its dependencies:

1. If you already have `@nuxtjs/tailwindcss`, `@nuxtjs/color-mode`, and `nuxt-icon` installed, remove them:

   ```
   npm uninstall @nuxtjs/tailwindcss @nuxtjs/color-mode nuxt-icon
   ```

2. Install Nuxt UI:

   ```
   npm install @nuxt/ui
   ```

3. Update `nuxt.config.ts`:

   ```javascript
   // nuxt.config.ts

   import { defineNuxtConfig } from "nuxt";

   export default defineNuxtConfig({
     modules: ["@nuxt/ui"],
   });
   ```

   <br>

## Integrate Vuelidate

Next, let's integrate Vuelidate for form validation:

1.  Install Vuelidate and its validators:

    ```
    npm install @vuelidate/core @vuelidate/validators
    ```

2.  Create your form with Nuxt UI components. For example:

    <UForm :validate="validateWithVuelidate" :state="form">
            <div class="grid grid-cols-2 gap-7">
              <div class="grid1 flex flex-col gap-2">
                <UFormGroup label="Name-Surname" name="nameSurname">
                  <UInput
                    v-model="form.nameSurname"
                    name="NameSurname"
                    placeholder="Name Surname"
                  />
                </UFormGroup>

                <UFormGroup label="Company Type" name="companyTypeId">
                  <USelect
                    v-model="form.companyTypeId"
                    value-attribute="id"
                    :options="companyTypes"
                    option-attribute="name"
                    placeholder="Company Type"
                  ></USelect>
                </UFormGroup>
                <UFormGroup label="ID/TAX Number" name="idTaxNo">
                  <UInput
                    v-model="form.idTaxNo"
                    type="text"
                    placeholder="ID/TAX number"
                  />
                </UFormGroup>
                <UFormGroup label="Company Trade Name " name="companyName">
                  <UInput
                    v-model="form.companyName"
                    placeholder="Company Trade Name"
                  />
                </UFormGroup>
                <UFormGroup label="City" name="city">
                  <USelect
                    @change="loadDistricts"
                    v-model="form.city"
                    :options="cities"
                    option-attribute="name"
                    value-attribute="id"
                    placeholder="City"
                  ></USelect
                ></UFormGroup>
              </div>
              <div class="grid2 flex flex-col gap-2">
                <UFormGroup label="District" name="district">
                  <USelect
                    v-model="form.district"
                    :options="districts"
                    option-attribute="name"
                    placeholder="Select District"
                  ></USelect
                ></UFormGroup>
                <UFormGroup label="Address Line " name="addressLine">
                  <UInput
                    v-model="form.addressLine"
                    type="text"
                    placeholder="Address line"
                  />
                </UFormGroup>
                <UFormGroup label="Phone" name="phone">
                  <UInput
                    v-model="form.phone"
                    type="phone"
                    placeholder="05__ ___ __ __"
                  />
                </UFormGroup>

                <UFormGroup label="Category" name="categoryId">
                  <USelect
                    v-model="form.categoryId"
                    :options="categories"
                    option-attribute="name"
                    value-attribute="id"
                    placeholder="Select District"
                  ></USelect
                ></UFormGroup>


              </div>
            </div>

         <div class="flex items-center justify-center pt-4">
          <UButton @click="onRegister" color="primary"> Register </UButton>
        </div>

          </UForm>

```script
<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import {
 helpers,
 maxLength,
 minLength,
 numeric,
 required,
} from "@vuelidate/validators";

const form = reactive({
 nameSurname: "",
 companyTypeId: "",
 idTaxNo: "",
 companyName: "",
 city: "",
 district: "",
 addressLine: "",
 phone: "",
 categoryId: "",

});
const v = useVuelidate(
 {
   nameSurname: {
     required: helpers.withMessage("This field is required", required),
     minLength: minLength(6),
   },
   companyTypeId: {
     required: helpers.withMessage("This field is required", required),
   },
   idTaxNo: {
     required: helpers.withMessage("This field is required", required),
     numeric: numeric,
   },
   companyName: {
     required: helpers.withMessage("This field is required", required),
     minLength: minLength(6),
   },
   city: {
     required: helpers.withMessage("This field is required", required),
   },
   district: {
     required: helpers.withMessage("This field is required", required),
   },
   addressLine: {
     required: helpers.withMessage("This field is required", required),
   },
   phone: {
     required: helpers.withMessage("This field is required", required),
     numeric: numeric,
     minLength: minLength(11),
     maxLength: maxLength(11),
   },
   categoryId: {
     required: helpers.withMessage("This field is required", required),
   },

 },
 form
);
function validateWithVuelidate() {
 v.value.$touch();
 return v.value.$errors.map((error) => ({
   path: error.$propertyPath,
   message: error.$message as string,
 }));
}

defineExpose({
 validate: async () => await v.value.validate(),
});

watch(form, validateWithVuelidate, { deep: true });

</script>
```

<br>

3.  Customize the form fields as per your requirements. Ensure to include validation rules using Vuelidate validators.

4.  Handle form submission and validation as needed. In the example above, `validateWithVuelidate` is called to trigger form validation, and `$errors` are mapped for displaying error messages.

By following these steps, you can integrate Vuelidate with Nuxt UI in your Nuxt.js application for robust form validation.


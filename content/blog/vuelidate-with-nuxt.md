---
authorname: Aysegul Karadan

title: "Using Vuelidate for Nuxt  "
img: /img/vuelidate/1.png
date: 28/02/2024
description: "Learn how to streamline form validation in your Nuxt.js application using Vuelidate and Nuxt UI components. This guide walks you through the integration process step-by-step, ensuring data integrity and enhancing user experience effortlessly. "
head:
  meta:
    - name: "keywords"
      content: "Nuxt.js, Vuelidate, Nuxt UI, form validation, user experience, data integrity, Vuelidate for nuxt, vuelidate in nuxt, vuelidate for nuxt.js, Vuelidate for nuxt 3, vuelidate in nuxt.js, Vuelidate for Nuxt Ui, vuelidate form, vuelidate nuxt integration, vuelidate nuxt ui form, how to use vuelidate with Nuxt, how to use vuelidate in nuxt , how to use vuelidate nuxt ui"

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

```

```

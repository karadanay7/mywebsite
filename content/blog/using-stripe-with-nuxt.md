---
authorname: Aysegul Karadan

title: "Using Stripe With Nuxt3"
img: /img/stripe/stripe1.png
date: 15/09/2023
description: "Discover how to seamlessly integrate the powerful Stripe payment processing platform with Nuxt 3, the latest iteration of the popular Vue.js framework. "
head:
  meta:
    - name: "keywords"
      content: "Stripe integration, Nuxt3, Nuxt.js, Stripe payment processing, Stripe with Nuxt3, Nuxt Stripe module, Nuxt Stripe integration, Stripe API, Stripe setup, Nuxt3 Stripe tutorial, payment gateway Nuxt3, Stripe checkout Nuxt3, Stripe payments Nuxt.js, Nuxt3 payment processing, Nuxt Stripe example, Stripe integration guide, Stripe in Nuxt.js, Stripe payment integration, Nuxt3 Stripe implementation, Stripe Nuxt3 module, Stripe Nuxt.js configuration, Stripe payments setup, Nuxt3 Stripe setup, Stripe payments tutorial, Stripe API Nuxt3, Stripe integration in Vue.js, Stripe checkout implementation, Stripe integration best practices, Nuxt3 payment gateway, Nuxt3 Stripe guide, Stripe payment processing Nuxt3, Nuxt3 payment integration, Stripe for Nuxt3 apps, Stripe payments Nuxt3 setup, Nuxt3 Stripe payments, Stripe module for Nuxt3, Stripe in Nuxt.js example, Nuxt3 Stripe checkout, integrating Stripe with Nuxt3, Nuxt3 Stripe tutorial, Stripe in Vue.js, Stripe payment solutions, Nuxt3 and Stripe, Stripe payment gateway Nuxt.js, Stripe API setup Nuxt3, Stripe integration steps, Stripe checkout Nuxt.js, Stripe and Nuxt.js integration, Nuxt3 and payment processing, Stripe setup guide, Stripe module setup, Nuxt3 Stripe API integration, Stripe with Nuxt3 example, Stripe payment API Nuxt.js, Nuxt3 Stripe configuration, Stripe payment handling Nuxt3, Stripe and Vue.js integration, Nuxt3 Stripe checkout implementation, Stripe integration Nuxt.js tutorial, Stripe payments with Nuxt3, Stripe and Nuxt3 app, Nuxt3 and Stripe payments, Stripe payment setup Nuxt3, Stripe in Nuxt3 apps, Nuxt3 Stripe integration guide, Stripe in Nuxt3 applications, Stripe payments integration, Stripe API integration with Nuxt3, Nuxt3 Stripe payment gateway, Stripe module integration Nuxt3, Stripe checkout process Nuxt.js, Stripe Nuxt3 setup tutorial, Stripe with Nuxt.js framework, Nuxt3 Stripe API setup, Stripe payments integration Nuxt3, Stripe module for Nuxt.js, Stripe checkout Nuxt3 example, Stripe integration in Nuxt3 tutorial, Stripe API setup guide, Stripe payment handling with Nuxt3, Nuxt3 Stripe payments example, Stripe in Vue.js application, Stripe with Nuxt3 configuration, Stripe payments guide Nuxt.js, Stripe and Nuxt3 integration guide, Stripe setup in Nuxt.js, Nuxt3 payment processing with Stripe, Stripe module setup Nuxt.js, Stripe checkout integration Nuxt3, Nuxt3 Stripe module integration, Stripe payments setup guide, Stripe integration in Nuxt.js apps, Stripe payment gateway integration, Stripe in Nuxt3 example, Stripe integration with Nuxt.js framework, Nuxt3 Stripe integration steps, Stripe API integration tutorial, Stripe payments with Nuxt3 tutorial, Stripe setup in Nuxt3, Nuxt3 and Stripe API, Stripe module guide Nuxt3, Stripe checkout Nuxt3 tutorial, Stripe with Nuxt.js setup, Stripe integration tutorial Nuxt3, Stripe and Nuxt.js payments integration, Nuxt3 Stripe integration example, Stripe payments integration tutorial, Stripe API and Nuxt3 integration, Stripe and Nuxt3 example, Nuxt3 Stripe payment setup, Stripe payments guide Nuxt3"
  


    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/using-stripe-with-nuxt
---

# Using Stripe with Nuxt 3

In today's digital age, a seamless and secure online payment system is essential for businesses. Stripe, a renowned payment processing platform, offers flexibility and ease of integration for developers. In this guide, we will walk you through the process of integrating Stripe with Nuxt 3, the latest version of the popular Vue.js framework. This will help you build a robust and user-friendly payment system.

<h2>Step 1: Install the Stripe Package</h2>

To enable Stripe functionality in your Nuxt 3 project, you need to install the Stripe library. Depending on your project configuration, choose either of the following commands:

For Server Side Rendering (SSR):

```
npm install stripe
```

or

```
yarn add stripe
```

<h2> 2 - Install the Stripe.js ES module</h2>

Next, install the Stripe.js ES module using the following command:

```
 npm install @stripe/stripe-js
```

or

```
yarn add @stripe/stripe-js
```

<h2> 3 - Create a Stripe Account and Obtain API Keys</h2>
Next, you should visit https://stripe.com/ go to developers section . There will be a test account on the top left. Go to the API keys and take the Publishable key and the Secret key by revealing the secret key. I also present an image to show of the keys above.

![stripe](/img/stripe/stripe.png)

<h2> 4 - Set Up Environment Variables </h2>
To maintain the security of your Stripe API keys and other sensitive information, it's crucial to store them as environment variables. Create a .env file in your project's root directory and add your Stripe API keys as follows:
<br>

```
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
```

<h2> 5 - Create a Stripe functionality </h2>
Within your Nuxt project, navigate to the server/api directory and create a stripe folder. In this folder, create a file called stripe.js. Here's a sample code snippet for this file:
<br>

```
import { loadStripe } from "@stripe/stripe-js";

export default defineEventHandler(async (event) => {
const body = await readBody(event);
const stripe = await loadStripe(process.env.STRIPE_SK_KEY);
const elements = stripe.value.elements();
return await stripe.value.paymentIntents.create({
amount: Number(body.amount),
currency: "usd",
automatic_payment_methods: { enabled: true },
});
});

```

<h2> 6 - Add script to nuxt.config.ts and setting runtimeconfig options </h2>

In your nuxt.config.ts file, add the Stripe script and configure runtime options as shown below:

```

runtimeConfig: {
public: {
stripePk: process.env.STRIPE_PK_KEY,
},
},

app: {
head: {
script: [{ src: "https://js.stripe.com/v3/", defer: true }],
},

},

```

<h2> 7 - Implement Payment Forms </h2>
Now, you can create payment forms for your Nuxt 3 pages. Here's an example of a payment form structure: <br>

```

            ....
            <form @submit.prevent="pay()">
              <div
                class="border border-gray-500 p-2 rounded-sm"
                id="card-element"
              />

              <p
                id="card-error"
                role="alert"
                class="text-red-700 text-center font-semibold"
              />

              <button
                :disabled="isProcessing"
                type="submit"
                class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
                :class="isProcessing ? 'opacity-70' : 'opacity-100'"
                id="processing"
                aria-label="loading"
              >
                <Icon v-if="isProcessing" name="eos-icons:loading" />
                <div v-else>Place order</div>
              </button>
            </form>
            ...

<script setup>
import { loadStripe } from "@stripe/stripe-js";

watch(
  () => total.value,
  () => {
    if (total.value > 0) {
      stripeInit();
    }
  }
);

const stripeInit = async () => {
  const runtimeConfig = useRuntimeConfig();

  stripe = await loadStripe(String(runtimeConfig.public.stripePk));

  let res = await useFetch("/api/stripe/paymentintent", {
    method: "POST",
    body: {
      amount: total.value,
    },
  });
  clientSecret = res.client_secret;

  elements = stripe?.elements();

  var style = {
    base: {
      fontSize: "18px",
    },
    invalid: {
      fontFamily: "Arial, sans-serif",
      color: "#EE4B2B",
      iconColor: "#EE4B2B",
    },
  };
  card = elements.create("card", {
    hidePostalCode: true,
    style: style,
  });

  // Stripe injects an iframe into the DOM
  card.mount("#card-element");
  card.on("change", function (event) {
    // Disable the Pay button if there are no card details in the Element
    document.querySelector("button").disabled = event.empty;
    document.querySelector("#card-error").textContent = event.error
      ? event.error.message
      : "";
  });

  isProcessing.value = false;
};
</script>

```

Please customize the pay(), createOrder(), and showError() functions according to your project requirements.

<h2>Final Thoughts </h2>
By following these steps, you can seamlessly integrate Stripe with Nuxt 3 and create a secure and reliable payment gateway for your online business. If you'd like to explore a practical implementation of this code, you can visit my AliExpress clone project on GitHub:
<br>

<h3>If you need to see implementation of the code with example project you can visit my aliexpress-clone project here is the link  </h3>

[Click here!](https://github.com/karadanay7/aliexpress-clone)

Feel free to delve into the code and adapt it to your specific needs. Happy coding!

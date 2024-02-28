---
authorname: Aysegul Karadan

title: "Using Stripe With Nuxt3"
img: /img/stripe/stripe1.png
date: 15/09/2023
description: "Discover how to seamlessly integrate the powerful Stripe payment processing platform with Nuxt 3, the latest iteration of the popular Vue.js framework. "
head:
  meta:
    - name: "keywords"
      content: "nuxt3, stripe, nuxtjs, using stripe with nuxt, stripe module nuxt3, nuxt stripe usage, implemeting stripe for nuxt3"

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

[Aliexpress-clone](https://github.com/karadanay7/aliexpress-clone)
<https://github.com/karadanay7/aliexpress-clone>
Feel free to delve into the code and adapt it to your specific needs. Happy coding!

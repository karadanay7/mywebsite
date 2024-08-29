import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    './nuxt.config.ts',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 2s ease 300ms",
      },
      colors: {
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'blue-dark': '#1e3a8a',
      },
      fontFamily: {
        index: ["Poppins"],
        hero: ["Roboto"] 
      },
    },
  },
};

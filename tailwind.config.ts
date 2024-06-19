import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    './nuxt.config.ts',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'blue-dark': '#1e3a8a',
      },
    },
  },
};

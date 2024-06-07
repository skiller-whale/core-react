/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./server/index.html",
    "./server/**/*.tsx",
    "./src/**/*.jsx",
    "./src_tsx/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

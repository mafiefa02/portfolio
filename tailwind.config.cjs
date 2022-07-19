/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ff645e",
        background: "#121212",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        grey: "#F6F6FA",
        blue: "#0D70EA",
        dropdownWhite: "#FBFAFA",
        smoke: "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

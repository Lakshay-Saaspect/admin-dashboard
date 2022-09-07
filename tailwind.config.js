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
        dark: "#151515",
        light: "#fff",
        sidebar_dark: "#0D0D0D",
        dark_grey: "#404040",
        grey_text: "#737373",
      },
    },
    screens: {
      md: "1000px",
    },
  },
  plugins: [],
};

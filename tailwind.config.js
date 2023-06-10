/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./server/views/**/*.pug", "./public/**/*.js"],
  theme: {
    fontFamily: {
      Outfit: "Outfit",
    },
    extend: {
      colors: {
        "fb-blue": "#445793",
        brand: "#7EC044",
        black: { 400: "#5a5a5a", 500: "#3a3a3a", 600: "#1e1e1e" },
        white: { 300: "#acacac", 400: "#cacaca", 500: "#eaeaea", 600: "#fefefe" },
        info: "",
        warning: "",
        success: "",
        danger: "",
      },
    },
  },
  plugins: [],
};

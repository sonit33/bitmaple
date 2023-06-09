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
        black: { 500: "#3a3a3a", 600: "#1e1e1e" },
        white: { 400: "#cacaca", 500: "#eaeaea", 600: "#fefefe" },
        info: "",
        warning: "",
        success: "",
        danger: "",
      },
    },
  },
  plugins: [],
};

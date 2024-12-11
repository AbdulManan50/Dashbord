/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppines: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#20232A",
        lightblue: "#00CEC3",
      },
    },
  },
  plugins: [],
};

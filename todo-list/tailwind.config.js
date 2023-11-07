/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6f5de"
      },
      fontFamily: {
        playpenSans: ["Playpen Sans", "sans-serif", "cursive"],
      }
    },
  },
  plugins: [],
}


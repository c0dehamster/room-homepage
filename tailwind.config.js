/** @type {import('tailwindcss').Config} */
export default {
  content: [   
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
    fontFamily: {
      "League Spartan": "'League Spartan', sans-serif"
    },
    colors: {
      "Dark Gray": "hsl(0, 0%, 63%)",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
      "Very Dark Gray": "hsl(0, 0%, 27%)"
    },
    fontSize: {
      base: "0.75rem",
      l: "1.75rem",
      xl: "2.25rem"
    }
  },
  plugins: [],
}


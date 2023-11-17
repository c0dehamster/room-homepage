/** @type {import('tailwindcss').Config} */
export default {
  content: [   
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layout-mobile": "1fr, auto",
        "layout-desktop": "1fr 1fr auto 1fr"
      }
    },
    fontFamily: {
      "League Spartan": "'League Spartan', sans-serif"
    },
    colors: {
      "dark-grey": "hsl(0, 0%, 63%)",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
      "very-dark-grey": "hsl(0, 0%, 27%)"
    },
    fontSize: {
      base: "0.75rem",
      l: "1.75rem",
      xl: "2.25rem"
    },
    screens: {
      tablet: "30rem",
      desktop: "64rem"
    }
  },
  plugins: [],
}


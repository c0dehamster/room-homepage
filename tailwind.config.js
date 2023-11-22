/** @type {import('tailwindcss').Config} */
export default {
  content: [   
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layout-tablet": "1fr 1.047fr",
        "layout-desktop": "1fr 1fr auto 1.047fr"
      },
      gridTemplateRows: {
        "layout-desktop": "2fr 1fr"
      }
    },
    fontFamily: {
      "league-spartan": "'League Spartan', sans-serif"
    },
    colors: {
      "dark-grey": "hsl(0, 0%, 63%)",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
      "very-dark-grey": "hsl(0, 0%, 27%)"
    },
    fontSize: {
      base: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      l: "2.25rem",
      xl: "2.75rem"
    },
    screens: {
      tablet: "30rem",
      desktop: "64rem"
    }
  },
  plugins: [],
}


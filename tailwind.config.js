/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        san: ["Open Sans", "sans-serif"],
      },

      colors: {
        customBlue: {
          light: "#138B9B",
          dark: "#004750",
          para: "#434343",
        },
      },

    },
  },
  plugins: [],
}


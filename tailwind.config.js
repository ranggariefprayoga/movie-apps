/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
      },
      extend: {
        gridTemplateColumns: {
          hero: "1fr 2fr",
          footer: "200px minmax(900px, 1fr) 100px",
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".no-select": {
            "user-select": "none",
          },
        };
        addUtilities(newUtilities);
      },
    ],
  },
};

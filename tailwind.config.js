/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: ["Lemon", "serif"],
      },
    },
    screens: {
      xs: "320px",
      // // => @media (min-width: 320px) { ... }
      sm: "640px",
      // // => @media (min-width: 640px) { ... }
      md: "768px",
      // // => @media (min-width: 320px) { ... }
      lg: "1024px",
      // // => @media (min-width: 768px) { ... }
      xl: "1280px",
      // // => @media (min-width: 1280px) { ... }
      xxl: "1536px",
      // // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      satisfy: ["Satisfy", "cursive"],
    },
    screens: {
      xxs: "360px",
      xs: "375px",
      sm: "480px",
      md: "640px",
      l: "768px",
      lg: "976px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1350px",
      "4xl": "1440px",
    },
    extend: {
      backgroundImage: {
        "animate-logo": "url('./assets/images/animate-logo.svg')",
      },
    },
  },
  plugins: [],
};

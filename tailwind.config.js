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
        "profile-pic": "url('./assets/images/animate-logo.svg')",
        combined: "url('./assets/images/me.jpg')",
        "rese": "url('../public/icons/rese.png')",
        "rese-storefront": "url('../public/icons/rese-storefront.png')",
        "alim": "url('../public/icons/alims-portfolio.png')",
        "pandamedical": "url('../public/icons/pandamedical-chat-icon.png')",
        "roppi": "url('../public/icons/roppi-pay.png')",
        "rese-admin": "url('../public/icons/rese-admin.png')",
        "thembani": "url('../public/icons/thembani-icon.png')",
        "recipe-app": "url('../public/icons/recipe-app.png')",
        "miatech": "url('../public/icons/miatech.png')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      boxShadow: {
        'custom': '0px 0px 0.6rem 1rem rgba(43, 225, 251, 0.1)',
      }
    },
  },
  plugins: [],
};

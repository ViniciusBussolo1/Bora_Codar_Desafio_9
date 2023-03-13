/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        black: {
          700: "#202024",
          900: "#0A0A0B",
        },
        white: "#FFFFFF",
        purple: "#8257E5",
        gray: {
          300: "#9CA3AF",
          400: "#444444",
        },
      },
    },
  },
  plugins: [],
};

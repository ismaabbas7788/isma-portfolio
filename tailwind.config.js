/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        darkBg: "#0f0f0f",
        darkCard: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

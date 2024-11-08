/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        secondary_background: "#EFEDE8",
        main : "#F1C761",
        secondary_main : "#2A2A2A",
        header: "#ffffff",
        gold: '#FFD700',
      },
    },
  },
  plugins: [],
};

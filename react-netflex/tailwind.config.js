/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    aspectRatio: {
      '16/4.5': '16 / 4.5',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


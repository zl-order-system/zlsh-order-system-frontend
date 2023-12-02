/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '345px',
      // => @media (min-width: 640px) { ... }
      'md': '390px',
      // => @media (min-width: 768px) { ... }
    }
  },
  plugins: [require('tailwindcss-animatecss')],
}


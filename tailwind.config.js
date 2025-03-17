/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shadow-primary': '#2D3250',
        'shadow-secondary': '#424769',
        'shadow-accent': '#7077A1',
        'shadow-light': '#F6B17A',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { 'box-shadow': '0 0 10px #7077A1, 0 0 20px #7077A1, 0 0 30px #7077A1' },
          'to': { 'box-shadow': '0 0 20px #F6B17A, 0 0 30px #F6B17A, 0 0 40px #F6B17A' },
        },
      },
    },
  },
  plugins: [],
} 
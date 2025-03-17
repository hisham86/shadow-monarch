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
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': { 'text-shadow': '0 0 10px #7077A1, 0 0 20px #7077A1, 0 0 30px #7077A1' },
          'to': { 'text-shadow': '0 0 20px #F6B17A, 0 0 30px #F6B17A, 0 0 40px #F6B17A' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fade-in-out 4s ease-in-out',
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '10%': { opacity: 1, transform: 'translateY(0)' },
          '90%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
}

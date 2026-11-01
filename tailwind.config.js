/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf7ef',
          100: '#f6ecd6',
          200: '#ecd9ad',
          300: '#e0c084',
          400: '#d4a957',
          500: '#c8963f',
          600: '#b07c30',
          700: '#8c5f27',
          800: '#6f4a22',
          900: '#5a3c20',
        },
        blush: {
          50: '#fdf5f3',
          100: '#fbe8e4',
          200: '#f6d0c8',
          300: '#f0b0a3',
          400: '#e88a78',
          500: '#db6b56',
          600: '#c84f3b',
          700: '#a73e2e',
          800: '#873529',
          900: '#6e2f24',
        },
        beige: {
          50: '#fdfbf8',
          100: '#faf4ea',
          200: '#f3e6d2',
          300: '#ead1b0',
          400: '#ddb88a',
          500: '#cca068',
          600: '#b8884d',
          700: '#946b3c',
          800: '#765532',
          900: '#60462a',
        },
        ivory: '#fefcf9',
        rosegold: '#b76e79',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

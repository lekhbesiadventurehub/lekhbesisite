import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '2rem' },
      screens: { '2xl': '1152px' },
    },
    extend: {
      colors: {
        // The crimson of Nepal's flag, with a darker hover shade and a soft tint for icon tiles.
        brand: { DEFAULT: '#dc143c', dark: '#b3102f', soft: '#fdecef' },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

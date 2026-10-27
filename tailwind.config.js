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
        // The logo's blue, with a darker hover shade, a soft tint for icon tiles and a deep
        // navy for dark panels.
        brand: { DEFAULT: '#2d6799', dark: '#24527a', soft: '#eaf1f8', ink: '#173a5c' },
        // The logo's sun yellow. Too light for text on white: use it for fills, with ink text.
        accent: { DEFAULT: '#ffc000', dark: '#e6ad00', soft: '#fff5d6' },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Changa', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0B655E',
          50: '#E6F2F1',
          100: '#CCE5E3',
          200: '#99CBC7',
          300: '#66B1AB',
          400: '#33978F',
          500: '#0B655E',
          600: '#09514B',
          700: '#073D38',
          800: '#052925',
          900: '#021512',
        },
        secondary: {
          DEFAULT: '#EDB91D',
          50: '#FDF8E6',
          100: '#FBF1CC',
          200: '#F8E399',
          300: '#F4D566',
          400: '#F1C733',
          500: '#EDB91D',
          600: '#D4A317',
          700: '#A07F12',
          800: '#6C550C',
          900: '#382B06',
        },
        dark: '#1A1A1A',
        'light-bg': '#F8F7F1',
        'filter-bg': '#DDE9F0',
      },
    },
  },
  plugins: [],
}

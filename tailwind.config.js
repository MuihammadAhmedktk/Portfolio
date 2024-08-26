/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding:'15px'
      },
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        },
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      screen:{
        xm:'425px',
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
  },
  plugins: [],
}

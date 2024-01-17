/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero':'url("/hero-bg.png")',
        'bg-image':'url("/background.png")',
        'footer-bg':'url("/footer-bg.png")',
      },

      colors:{
        "base-yellow":"#EBEB14",
        "driver-bg":"#02091B"
      }
    },
  },
  plugins: [],
})
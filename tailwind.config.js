/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Quantico"', 'sans-serif'],
        pixel: ['"Geist Pixel"', 'monospace'],
        handwriting: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'main':'var(--font-main)',
      },
      colors:{
        'color-background': 'var(--background-color)',
        'color-text': 'var(--text-color)',
        'color-text-constrast':'var(--text-color-constrast)',
      }
    },
  },
  plugins: [],
}

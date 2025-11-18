/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8A2BE2',
        'brand-pink': '#F366FF',
        'brand-bg': '#181818',
        "primary": "#8A2BE2",
        "accent": "#F366FF",
        "accent-pink": "#F366FF",
        "action-pink": "#F366FF",
        "background-dark": "#181818",
        "surface-dark": "#282828",
        "surface-dark-alt": "#3e3e3e",
        "text-main-dark": "#e0e0e0",
        "text-secondary-dark": "#b3b3b3",
        "text-light": "#FFFFFF",
        "text-muted-dark": "#D9D9D9",
      },
      fontFamily: {
        'display': ['Golos Text', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        "heading": ["Golos Text", "sans-serif"],
        "golos": ["Golos Text", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom1: {
          600: '#FF8482',
        },
      },
      fontFamily: {
        'alfa': ['Alfa Slab One'],
        'sans': ['DM Sans'],
      },
    },
  },
  plugins: [],
}
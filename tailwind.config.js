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
        custom2: {
          600: '#BE6361',
        },
        custom3: {
          600: '#A85756',
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
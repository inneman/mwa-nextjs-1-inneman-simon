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
        custom4: {
          600: '#FFF2DD',
        },
        almostBlack: {
          600: '#333333',
        },
      },
      fontFamily: {
        'alfa': ['Alfa Slab One'],
        'sans': ['DM Sans'],
      },
      backgroundImage: {
        'bgImage': "url('/public/overlay.jpg)",
      },
    },
  },
  plugins: [],
}
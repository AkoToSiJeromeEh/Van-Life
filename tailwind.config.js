export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        custom: {
          peach: '#FFF7ED',
          tangerine: '#FF8C38',
          charcoal: '#252525',
          slate: '#4D4D4D',
          apricot: '#FFCC8D',
          ebony: '#161616',
          footer: 'hsla(0, 0%, 67%, 1)',

        },
      },
      width : {
        tablet : '',
        laptop : '',
        mobile : '',
      }
    },
  },
  plugins: [],
};

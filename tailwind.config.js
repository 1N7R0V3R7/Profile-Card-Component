module.exports = {
  purge: [
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'kumbhSans': ['"Kumbh Sans"', 'sans-serif']
      },
      colors: {
        backgroundBlue: '#19A1AD',
        darkBlue: '#2D3248',
        lightGray: '#969696',
        lightBlue: '#19A2AE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

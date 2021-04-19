// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'headings': ['Kiwi\\ Maru', 'Sans-serif'],
        'logo': ['New\\ Tegomin'],
        'body': ['Roboto'],
        'serif': ['ui-serif', 'Georgia', 'Cambria']
       },
       rotate: {
        '270': '270deg',
       },
       fontSize:{
         'simplr': '12rem',
         'xs-simplr': '9rem',
         'vs': '0.75rem',
         'msme': '0.9rem',
         'simple': '1rem'
       },
       inset: {
         '99': '55rem'
       },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
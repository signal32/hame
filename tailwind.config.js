const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./themes/**/*.html", "./templates/**/*.html", "./content/**/*.md"],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        paua: '#262356',
        air: '#0A59E2',
        ocean: '#1532a7',
        matisse: '#3c5f82',
        heather: '#88639D',
        htest: '#1a0c0e',
        ...colors
      },
      fontFamily: {
        'serif': ['nanum']
      }
    },
    variants: {},
    plugins: [],
  };
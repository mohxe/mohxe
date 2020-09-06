module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,

  },
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'brown-brick': 'url(/images/brown-brick.jpg)'
      })
    },
    screen: {
      'xs': '576px',
      // => @media (min-width: 576)

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {},
  plugins: [],
}

module.exports = {
  purge: ['./_posts/*.html',
  './_layouts/*.html',
  './index.html',
  './includes/*.html'],
  theme: {
    typography: {
      'lg': {
        css: {
          h1: {
            lineHeight: '1.25',
          },
          a: {
            color: '#1c64f2',
            textDecoration: 'none',
            hover: {
              textDecoration: 'underline',
            }
          }
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}

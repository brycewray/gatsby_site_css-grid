const postcssImport = require('postcss-import')
const postcssNesting = require('postcss-nesting')

module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 1 }),
    postcssImport({
      root: './src/assets/css',
    }),
    require('tailwindcss'),
    postcssNesting({}),
  ],
}
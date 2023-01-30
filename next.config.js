const withNextra = require('nextra')({
  // Tell Nextra to use the custom theme as the layout
  theme: './theme.jsx',
})

module.exports = withNextra({
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
})

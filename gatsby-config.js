const path = require("path")

module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, 'src'),
        // _src: path.join(__dirname, "src/assets/js"),
        // _components: path.join(__dirname, "src/components"),
      },
    },
  ],
}

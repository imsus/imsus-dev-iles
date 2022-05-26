const prettyhtml = require('@volar-plugins/prettyhtml');

module.exports = {
  plugins: [
    prettyhtml({
      wrapAttributes: true,
      sortAttributes: true
    })
  ]
}
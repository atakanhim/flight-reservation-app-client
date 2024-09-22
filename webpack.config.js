// webpack.config.js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // Diğer Webpack ayarlarınız...
  plugins: [
    new ESLintPlugin({
      failOnWarning: false, // Uyarılar build'i kesmez
      failOnError: false,   // Hatalar build'i kesmez
    }),
  ],
};
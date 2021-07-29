const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
  },
};

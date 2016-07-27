var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './scripts/main.js'],
  },
  output: {
    path: './bundle_binck',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/bundle_binck/'
  },
  devServer: {
    publicPath: 'http://localhost:8080/bundle_binck/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',}
    ]
 },
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}

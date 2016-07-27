var webpack = require('webpack');
module.exports = {
  entry: './scripts/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',},
      { test: /aws-sdk/, loaders: ["transform?brfs"]},
      { test: /\.json$/, loaders: ['json']}
    ]
  },
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  },
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}

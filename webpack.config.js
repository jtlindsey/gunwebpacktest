var webpack = require('webpack');
module.exports = {
  devtool: "source-map",
  target: "node",
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
 plugins: [
   new webpack.DefinePlugin({ "global.GENTLY": false })
 ]
}

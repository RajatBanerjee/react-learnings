var ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [new ExtractTextPlugin('bundle.css')],
  devServer: {
    historyApiFallback: true,
  },
};
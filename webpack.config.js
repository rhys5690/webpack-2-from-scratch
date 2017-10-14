const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      },
      {
        test: /\.scss$/, //files ending with scss
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'), //call the extracttext constructor and name our css file
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'), //A directory or url to serve content from
    historyApiFallback: true, //fallback to index.html for single page apps
    inline: true, //open default browser while launching
    open: true
  },
  devtool: 'eval-source-map'
};

module.exports = config;

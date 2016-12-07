const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/js/index.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html', to: '../index.html' }
    ])
  ],
};
/*eslint-env node */

'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => ({
  entry: {
    main: './main.jsx',
    module1: './module1/module1.jsx',
    module2: './module2/module2.jsx',
    module3: './module3/module3.jsx',
  },
  devtool: argv.mode === 'production' ? 'none' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html',
      minify: {
        collapseWhitespace: argv.mode === 'production',
      },
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
})

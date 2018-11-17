const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,

        use: [
          {
            loader: 'style-loader',

            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },

  entry: {
    main: ['./src/main/index.js'],
    demo1: './src/demo1/index.js',
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      template: './src/index.html',
    }),
  ],
};

/* eslint-disable filenames/match-regex, import/no-commonjs */

const webpack = require('webpack')
const path = require('path')
const context = path.resolve(__dirname, 'src')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  context,
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?importLoaders=1', 'postcss-loader'],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader?sourceMap&sourceMapContents',
          ],
        }),
      },
      {
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                generateScopedName: '[path]___[name]__[local]___[hash:base64:5]',
                filetypes: {
                  '.scss': 'postcss-scss',
                },
                context,
              },
            ],
          ],
        },
        test: /\.js$/,
      },
    ],
  },
  stats: 'minimal',
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true,
    }),
  ],
}

/* eslint-disable filenames/match-regex, import/no-commonjs */

const webpack = require('webpack')
const path = require('path')
const context = path.resolve(__dirname, 'src')
var dirname = path.join(__dirname, '../', '../')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  context,
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.join(context, 'static'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            //'postcss-loader',
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
      filename: '[name].css',
    }),
  ],
}

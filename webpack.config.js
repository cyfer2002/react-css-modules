/* eslint-disable filenames/match-regex, import/no-commonjs */

const webpack = require('webpack')
const path = require('path')
const context = path.resolve(__dirname, 'src')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context,
  entry: ['bootstrap-loader/lib/bootstrap.loader!bootstrap-loader/no-op.js', './index.js'],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      // Fonts
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
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
                filetypes: {
                  '.scss': { syntax: 'postcss-scss' },
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
      ignoreOrder: true,
    }),
    new HTMLWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
    }),
  ],
}

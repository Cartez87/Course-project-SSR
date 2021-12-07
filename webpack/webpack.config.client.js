const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  devServer: {
    historyApiFallback: true,
  },
  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/client.jsx',
  ].filter(Boolean),

  module: {
    rules: [
      {
        test:/\.(s*)css$/,
         use: [
          MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
         ]
      }, 
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' 
      },
    ],
  },
  plugins: [
    !isDevMod && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    /**
     * This plugin extract CSS into separate files.
     * It creates a CSS file per JS file which contains CSS.
     * It supports On-Demand-Loading of CSS and SourceMaps.
     * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
     */
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ].filter(Boolean),
});

const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
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
    new MiniCssExtractPlugin({
      filename: 'main.css',
    })
  ]
});

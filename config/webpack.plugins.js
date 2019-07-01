// importing webpack dependencies
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

// instantiating webpack dependencies
const cleanWebpack = new cleanWebpackPlugin();
const htmlWebpack = new htmlWebpackPlugin({
  template: 'src/index.html',
  title: 'my-title',
  minify: {
    removeComments: true,
    collapseWhitespace: true
  },
});
const miniCssExtract = new miniCssExtractPlugin();

module.exports = {
  cleanWebpack,
  htmlWebpack,
  miniCssExtract,
};

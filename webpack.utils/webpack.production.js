const webpack = require("webpack");
const { join } = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env, API_URI) => ({
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: join(__dirname, '..'),
      exclude: [],
      verbose: true,
      dry: false
    }),
    new ExtractTextPlugin({
      filename: "css/styles.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./favicon.ico"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        API_URI: JSON.stringify(API_URI)
      }
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.ProgressPlugin(),
  ],
  mode: env,
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: true,
        ecma: 8,
        mangle: true
      },
      sourceMap: true
    })]
  }
});
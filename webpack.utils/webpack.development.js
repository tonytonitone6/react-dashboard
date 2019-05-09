const webpack = require("webpack");
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

module.exports = (env, API_URI) => ({
  plugins: [
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
    new webpack.ProgressPlugin(),
    // new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
  ],
  mode: env,
  devtool: env === "development" ? "source-map" : "",
  devServer: {
    contentBase: join(__dirname, "../dist"),
    historyApiFallback: true,
    proxy: {
      "/v1": "http://[::1]:5000"
    }
  }
});
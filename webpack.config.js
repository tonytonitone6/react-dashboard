const { join } = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./webpack.utils/webpack.${env}`)(env);

module.exports = ({ mode }) =>
  webpackMerge(
    {
      entry: "./index.js",
      output: {
        path: join(__dirname, "dist"),
        publicPath: "/",
        filename: "[chunkhash].js"
      },
      module: {
        rules: [
          {
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
          },
          {
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader", "sass-loader"]
            })
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(["dist"]),
        new ExtractTextPlugin({
          filename: "css/styles.css",
          allChunks: true
        }),
        new HtmlWebpackPlugin({
          template: "./index.html",
          favicon: "./favicon.ico"
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode)
  );

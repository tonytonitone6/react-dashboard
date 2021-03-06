const { join } = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = (env, API_URI) => require(`./webpack.utils/webpack.${env}`)(env, API_URI);

module.exports = ({ mode, API_URI }) =>
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
            test: /\.(js|jsx)?$/,
            use: ["babel-loader"],
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
      resolve: {
        extensions: ['.js', '.jsx'],
      }
    },
    modeConfig(mode, API_URI)
  );
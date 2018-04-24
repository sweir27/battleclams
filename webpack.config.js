const path = require("path");
const webpack = require('webpack')

module.exports = {
  mode: "development",
  devServer: {
    stats: "errors-only"
  },
  entry: {
    intro: [
      "./client/intro.js",
      "webpack-hot-middleware/client"
    ],
    battleclam: [
      "./client/battleclam.js",
      "webpack-hot-middleware/client"
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  },
  resolve: {
    alias: {
      assets: path.join(__dirname, "dist")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /client/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/stage-3", "@babel/react"],
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.css/,
        include: /client/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
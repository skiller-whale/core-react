const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

const dev = process.env.NODE_ENV !== "production"

const isTsx = process.env.SKILLERWHALE_LANG === "ts"
const language = isTsx ? "tsx" : "jsx"

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, "/src_tsx/index.html"),
  filename: "index.html",
  inject: "body",
})

const DefinePluginConfig = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production"),
})

module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: "3500",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },
  devtool: "source-map",
  entry: [path.join(__dirname, `/src${isTsx ? "_tsx" : ""}/index.${language}`)],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "/build"),
  },
  mode: dev ? "development" : "production",
  plugins: dev
    ? [HTMLWebpackPluginConfig]
    : [HTMLWebpackPluginConfig, DefinePluginConfig],
}

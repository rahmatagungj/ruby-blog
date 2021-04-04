var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
    ],
  },
  mode: "production", // ganti ke production kalo mau build
  resolve: {
    extensions: [".js", ".es6", ".jsx"],
  },
};

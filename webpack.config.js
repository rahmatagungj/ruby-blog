var path = require("path");

module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path: path.resolve(__dirname, "assets/js"),
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
  mode: "development", // ganti ke production kalo mau build
  resolve: {
    extensions: [".js", ".es6", ".jsx"],
  },
};

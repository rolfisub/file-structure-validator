var path = require("path");
module.exports = {
  entry: "./src/index.ts",
  mode:"production",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "fsv.js",
    library: "fsv",
    libraryTarget: "commonjs"
  }
};
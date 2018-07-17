const path = require("path");
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
    ],
  },
  plugins: [
     //
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  }
};
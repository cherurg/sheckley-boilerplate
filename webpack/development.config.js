var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, '..'),
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          stage: 0
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js']
  }
};
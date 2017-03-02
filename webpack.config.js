const path = require("path");
const webpack = require("webpack");

function join(dest) {
  return path.resolve(__dirname, dest);
}

function web(dest) {
  return join('web/static/' + dest);
}

module.exports = {
  entry: web('js/application.js'),

  output: {
    path: join('priv/static/js'),
    filename: 'application.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },

  resolve: {
    modules: [
      "node_modules"
    ],

    extensions: ['.js', '.jsx']
  }
};

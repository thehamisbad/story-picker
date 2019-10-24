const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + '/src/js/index.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'resume_bundle.js'
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        { 
          test: /\.tsx?$/, 
          loader: "ts-loader" },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
          ]
      }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
          })
    ]
  };
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "cheap-module-source-map",
  resolve: {
    extensions: [".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        }),
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  }),
  new ExtractTextPlugin('style.css')]
}
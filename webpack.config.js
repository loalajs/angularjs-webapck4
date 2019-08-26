const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    app: path.resolve(SRC, 'app.js')
  },
  output: {
    path: DIST,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AngularJS Webpack',
      filename: path.resolve(DIST, 'index.html'),
      template: path.resolve(SRC, 'index.html'),
      inject: 'body',   
      favicon: path.resolve(SRC, 'img', 'favicon.ico')
    })
  ],
  devtool: process.env.NODE_ENV !== 'production' ? "eval-source-map" : "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true
  }
};
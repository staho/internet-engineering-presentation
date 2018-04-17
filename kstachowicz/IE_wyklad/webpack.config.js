/*
    ./webpack.config.js
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
    mode: 'development',
    /*
     * Ideą webpacka jest określenie wejścia i wyjścia
     * Służy to wskazaniu gdzie powinen się zacząć proces budowania apki (jako że JS nie ma jako takiej kompilacji, chodzi tutaj o serię zabiegów
     * które wykonuje się aby np. zminimalizować kod, skompilować kod sass czy scss do css, zapewnienie kompatybilności poprzez konwersję babela)
     * Na wyjściu otrzymujemy zatem czysty kod JS oraz CSS. 
     */
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig],
}
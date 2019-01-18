const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['./app/main.js'],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template: 'index.html'
      })
    ],
    module: {
        rules: [
          { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: {
              loader: "babel-loader" 
            }
          }         
        ]
      }   
};
const webpack = require('webpack');
module.exports = {
     entry: './app/app.js',
     output: {
         path: '/webpack/wepack-demo/dist',//注：此路径要求是绝对路径
         filename: 'app.bundle.js'
     },
      module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     },
//   plugins: [
//      new webpack.optimize.UglifyJsPlugin({
//          compress: {
//              warnings: false,
//          },
//          output: {
//              comments: false,
//          },
//      }),
//  ]
 };
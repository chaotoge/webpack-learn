const webpack = require('webpack');
module.exports = {
     entry: {
       app:['./app/app.js']
     },
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
     plugins: [
         /*
          Hot Module Replacement with node.js API热重载需要的3步骤
         * Three changes are needed:
          add an entry point to the webpack configuration: webpack/hot/dev-server.
          add the new webpack.HotModuleReplacementPlugin() to the webpack configuration.
          add hot: true to the webpack-dev-server configuration to enable HMR on the server.
         * */
        new webpack.HotModuleReplacementPlugin()//添加热重载插件。实现热重载
     ]
 };
/**
 * Created by @chaotoge on 2017/6/22.
 */
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
console.log(webpackConfig)
var compiler = webpack(webpackConfig)
var server = new WebpackDevServer(compiler, {
    hot: true,
    compress: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
})
server.listen(8080, "localhost", function() {});
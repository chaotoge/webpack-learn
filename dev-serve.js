/**
 * Created by @chaotoge on 2017/6/22.
 */
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
console.log(webpackConfig)
webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
console.log(webpackConfig.entry)
var compiler = webpack(webpackConfig)
//webpack-dev-serve  运行配置
var server = new WebpackDevServer(compiler, {
    hot: true,
    compress: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
})
server.listen(8080, "localhost", function() {
    console.log('localhost'+'8080');
});
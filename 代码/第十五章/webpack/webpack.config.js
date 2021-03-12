const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'管理输出',
        })
    ],
    devServer:{
        port:3000,
        contentBase:path.join(__dirname,'dist')
    }
}
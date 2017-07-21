/**
 *
 * title: webpack.config.js
 *
 * author: WangPei.
 *
 * date: 2017/7/20.
 *
 */
var webpack=require("webpack");
var path = require('path');
module.exports ={
    entry:{
        "index": "./src/index.js"
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/build/'
    },

    resolve: {
        extensions: ['.js', 'jsx']
    },
    // 实际就是自动添加后缀，默认是当成js文件来查找路径
    // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.(css|less)$/,
                loader:'style!css!less'
            },
            {
                test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
                loader: 'url?limit=1024&name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url?limit=100000&name=images/[hash:8].[name].[ext]"
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 启用热替换,仅开发模式需要

        new webpack.NoEmitOnErrorsPlugin()
        // 允许错误不打断程序，,仅开发模式需要

    ]

};
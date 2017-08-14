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
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    entry:{
        "index": "./src/index.js"
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js',
        publicPath: '',
        // 模板、样式、脚本、图片等资源对应的server上的路径
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
                loader:'style!css!postcss!less'
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
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: ['autoprefixer']
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        // 启用热替换,仅开发模式需要

        new webpack.NoEmitOnErrorsPlugin(),
        // 允许错误不打断程序，,仅开发模式需要

        new HtmlWebpackPlugin({
            title: 'eTest开发模式',
            filename:'index.html',
            // 文件名以及文件将要存放的位置

            favicon:'./src/favicon.ico',
            // favicon路径

            template:'./src/template.html',
            // html模板的路径

            inject:'body',
            // js插入的位置，true/'head'  false/'body'

            chunks: ['index' ],
            // 指定引入的chunk，根据entry的key配置，不配置就会引入所有页面的资源

            hash:true,
            // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
            // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！

            minify:{
                // 压缩HTML文件
                removeComments:true,
                // 移除HTML中的注释

                collapseWhitespace:false
                // 删除空白符与换行符
            }
        })

    ]

};
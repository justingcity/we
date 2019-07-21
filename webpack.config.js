const path = require('path')
const htmlWebpackPlugin  = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    devServer:{
       open: true,
       port:3000,
       hot: true
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定模板页面，
            filename: 'index.html'
        })
    ],
    module:{//配置 第三方模块 加载器
        rules:[
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use:['style-loader', 'css-loader','less-loader']
            },
            {
                test: /\.scss$/,
                use:['style-loader', 'css-loader','sass-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use:[{
                        loader:'url-loader'
                    }]
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use:[{
                        loader:'url-loader'
                    }]
            },
            {
                test: /\.(ttf|woff|eot|woff2|svg)$/,
                use:[{
                        loader:'url-loader'
                    }]
            },
            {
                test: /\.js$/,
                use:['babel-loader'],
                exclude:/node_modules/
            }
        ]
    }
        
}
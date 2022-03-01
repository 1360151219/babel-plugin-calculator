const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')// 这里需要解构
// const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            //排除node_modules目录下的文件
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({})
    ]
};
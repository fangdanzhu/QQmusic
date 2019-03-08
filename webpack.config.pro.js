const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');

module.exports = {
    mode:'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: 'js/',
        filename: '[name].[chunkHash:8].js',
    },
    resolve: {
        alias: {},
 /*       extensions: ['echarts'],
        mainFiles: ['.js', '.json', '.less'],
        mainFields: ['main', 'node'],*/
    },
    module:{

    },
    plugins:[
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            filename:'../index.html',
            title:'线上测试专用',
            template:'./online.html'
        }),
    ]
};


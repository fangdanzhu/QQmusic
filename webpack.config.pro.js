const webpack = require('webpack');
const path = require('path');
const Happypack=require('happypack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    mode:'production',
    entry: {
        index: './index.html'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.html',
    },
    resolve: {
        alias: {},
        extensions: ['echarts'],
        mainFiles: ['.js', '.json', '.less'],
        mainFields: ['main', 'node'],
    },
    module:{

    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            title:'线上测试专用',
            template:'./online.html'
        }),
    ]
};


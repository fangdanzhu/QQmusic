const webpack = require('webpack');
const path = require('path');
const Happypack = require('happypack');

module.exports = {
    resolve: {
        modules: [
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname,'src')
        ],
        //extensions: ['echarts'],
        //mainFiles: ['.js', '.json', '.less'],
        //mainFields: ['main', 'node'],
        alias: {},
    },
    module: {
        rules: [
            {
                test: /.js$/,
                include: path.resolve(__dirname,'src'),
                use: 'Happypack/loader?id=js'
            },
            {
                test: /.css$/,
                include: path.resolve(__dirname,'src'),
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new Happypack({
            id: 'js',
            loader: 'babel-loader',
            options:{
                cacheDirectory: true,
            }
        })
    ],
};



const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: './src/index.js'
    },
    target:'web',
    output: {
       path: path.resolve(__dirname, 'dist/js'),
       publicPath: "/dist/js/",
       filename: 'bundle.js',
    },
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename: 'index.html',
            title:'开发测试'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 8085,
        publicPath: '/dist/js/',
        contentBase: './',
       // open:true,
        historyApiFallback: true,
    }
};


const webpack = require('webpack');
const path = require('path');
const Happypack = require('happypack');

module.exports = {
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src')
        ],
        //extensions: ['echarts'],
        //mainFiles: ['.js', '.json', '.less'],
        //mainFields: ['main', 'node'],
        alias: {},
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: 'Happypack/loader?id=js'
            },
            {
                test: /\.(css|less)$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpe?g|png|gif|mp3|mp4|ico)$/i,
                use: ['file-loader?name=img/[name].[ext]']
              /*  use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 1024 * 10,
                          //  path: path.resolve(__dirname, 'dist/img'),
                            filename:'img/[name].[ext]'
                        }
                    }
                ]*/
            }
        ]
    },
    plugins: [
        new Happypack({
            id: 'js',
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['env', 'react', 'stage-0']
                }
            }],
        })
    ],
};



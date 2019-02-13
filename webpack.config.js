const webpackMerge=require('webpack-merge');
const baseConfig=require('./webpack.config.base');
const proConfig=require('./webpack.config.pro');
const devConfig=require('./webpack.config.dev');
let config;

if(process.env.NODE_ENV==='development'){
    config= webpackMerge(baseConfig,devConfig)
}else {
    config=webpackMerge(baseConfig,proConfig)
}
console.log(config);
module.exports=config;
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
const baseConfig= require('./base.config')
const webpackMerge = require('webpack-merge')
module.exports = webpackMerge.merge(baseConfig,{
  plugins:[
    // new webpack.BannerPlugin('最终版权归xqz所有'),
    // new HtmlWebpackPlugin({
    //   template:'index.html'
    // }),
    new UglifyjsWebpackPlugin()
  ]
})


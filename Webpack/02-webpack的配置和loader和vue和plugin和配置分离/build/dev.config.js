const webpackMerge=require('webpack-merge')
const baseConfig = require('./base.config')
module.exports=webpackMerge.merge(baseConfig,{
  devServer:{
    //服务哪一个文件夹
    contentBase:'./dist',
    //是否需要实时监听
    inline:true
  }
})

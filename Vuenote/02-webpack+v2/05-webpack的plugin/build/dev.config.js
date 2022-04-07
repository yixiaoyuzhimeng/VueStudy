const webpackMerge=require('webpack-merge')
const baseConfig=require('./base.config')
// 开发时依赖
module.exports = webpackMerge(baseConfig,{
  devServer:{
    contentBase:'./dist',//指定文件夹提供本地服务
    inline:true//实时监听
  }
})



const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
module.exports={
  configureWebpack:{
    resolve: {
      // 起别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'netword': '@/network'
      }
    }
  }
}

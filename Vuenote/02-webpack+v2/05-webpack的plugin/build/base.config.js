// 引入path包
const path = require('path')
const webpack =require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取绝对路径
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath:'./dist/'
    // 用于把生成的图片正常显示出来（路径问题）
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // 当加载的图片小于limit时，会将图片编译成base64字符串形式
              // 当加载的图片大于limit时，需要使用file-loader模块进行加载
              name:'img/[name].[hash:8].[ext]'
              // 使名字更容易看到
            },
          }
        ]
      },
      {
        test: /\.js$/,
        // 不包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ] 
  },
  resolve:{
    // alias:别名
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    },
    // 设置扩展名
    extensions:['.js','.css','.vue']
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归yixiaoyuzhimeng所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
  ],
}
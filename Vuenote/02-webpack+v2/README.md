# webpack
## day6 模块化和webpack初识
#### 模块化的普通使用和commonJs使用了解
导入<br>
const {add,mul}=require('./mathUtils.js')<br>
导出<br>
module.exports={add,mul}<br>
#### es6的模块化使用
###### 1.导入
import {flag,sum} from "./aaa.js";<br>
import {height,num1} from "./aaa.js"<br>
导入类、对象 <br>
import {sum1,Person} from "./aaa.js";<br> 
用export default导出的，导入时起名<br>
import adder from from "./aaa.js"; <br>
导入时起别名<br>
import * as aid from "./aaa.js"; <br>
###### 2.导出
导出已定义好的变量<br>
export{<br>
​	flag,sum<br>
}<br>
导出时定义变量<br>
export var num1=1000;<br>
导出时定义函数<br>
export function sum1(num1,num2){<br>
​	return num1+num2;<br>
}<br>
导出时定义类export class Person{}<br>
export default 由导入者自己命名，在同意模块中，不允许同时存在多个<br>
#### webpack
##### 作用
- 模块 将各种文件整合为模块来使用,处理模块之间相关的依赖
- 打包 
##### 安装
- webpack依赖node环境 
node为了正常执行代码，必须包含各种依赖包<br>
npm用于管理包<br>
- vue cli依赖webpack3.6.0 
全局安装[npm install webpack@3.6.0 -g] <br>
局部安装[npm install webpack@3.6.0 --save-dev]<br>
终端中输入webpack获得的都是全局webpack<br>
##### 使用
- 使用webpack打包
[webpack ./src/main.js(入) ./dist/bundle.js(出)]<br>
 html中直接引用bundle.js<br>
- 配置好直接打包[ webpack ]
webpack.config.js 中设置入口和出口(动态获取路径)<br>
一旦准备使用nord就先进行初始化[npm init]生成package.json<br>
若存在要使用的依赖，就使用[npm run install ~]安装依赖<br>
- [npm run build]
在package.json的'scripts'中加入"build":"webpack"<br>
这种方式会优先在本地里找webpack版本(局部安装)<br>
## day8 webpack
2022.4.1 摸鱼ing
## day10 webpack配置loader
##### 打包配置
######  loader 
- 将各种文件转化为浏览器可识别的文件
###### css
- 在main.js中导入css文件
[ require('./css/normal.css')]
- 安装
[npm install --save-dev css-loader@2.0.2]<br>
[npm install --save-dev style-loader@0.23.1]<br>
下载的插件默认是最新版本的，如果需要下载指定版本，则在插件名称后需要加上@版本号<br>
- 配置 在webpack.config.js中的modules
[ <br>
  module.exports = {<br>
    module: {<br>
      rules: [<br>
        {<br>
          test: /\.css$/,<br>
          use: [ 'style-loader', 'css-loader' ]<br>
         css-loader只加载，style-loader负责渲染到dom中<br>
        }
      ]
    }
  }
]
###### less
- 导入
- 安装
[npm install --save-dev less-loader@4.1.0]<br>
[npm install --save-dev less@3.9.0]<br>
- 配置
{
  test: /\.less$/,<br>
  use: [{<br>
      loader: "style-loader" // creates style nodes from JS strings<br>
  }, {
      loader: "css-loader" // translates CSS into CommonJS<br>
  }, {
      loader: "less-loader" // compiles Less to CSS<br>
  }]
}
###### url
- 导入
- 安装
[npm install --save-dev url-loader@1.1.2]<br>
[npm install --save-dev file-loader@3.0.1]<br>
并在output中配置生成图片的位置[ publicPath:'文件夹名']<br>
还可修改生成图片的名字<br>
- 配置
[
   {
        test: /\.(png|jpg|gif)$/,<br>
        use: [
          {
            loader: 'url-loader',<br>
            options: {
              limit: 8192
               name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
] 
###### babel
- ES6转为ES5
- 安装
[npm install --save-dev babel-loader@7.1.5 babel-core@6.26.3 babel-preset-es2015@6.24.1]
- 配置
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
## day11 webpackVue使用和配置plugin
##### 使用Vue
###### 安装
- [npm install vue@2.5.21 --save]
###### 使用
- runtime-only 
不可以有任何的template
- runtime-compiler 
可以有template,因为有compiler用于编译<br>
需要在webpack.config.js中使用alias指出依赖runtime-compiler<br>
 resolve:{
    // alias:别名
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  }
###### 用法
- 基础使用
- template选项的内容可以替代el
- 组件的使用
- 分离为js文件
- vue文件
vue-loader 
(1)导入<br>
[import App from './vue/App.vue']<br>
假如想在导入的时候不使用后缀名[import App from './vue/App']，可在webpack.config.js中的resolve中配置[ extensions:[ '.js','.css','.vue']]，未实现<br>
(2)安装<br>
[npm install vue-loader@13.0.0 vue-template-compiler@2.5.21  --save-dev] <br>
(3)配置<br>
{
        test:/\.vue$/,
        use:['vue-loader']
      }<br>
(4)组件的嵌套使用<br>
##### 配置plugin  
###### plugin
- 对现有框架的扩充
###### banner:版权声明
- 配置<br>
导入[const webpack =require('webpack')]<br>
使用[  plugins:[
    new webpack.BannerPlugin('最终版权归yixiaoyuzhimeng所有')
  ]]<br>
- 效果在打包的budle.js文件夹的开头可以看出
###### HtmlWebpackPlugin
- 作用：在dist文件夹自动生成index.html文件，并将打包的js文件自动配置
- 安装<br>
[npm install html-webpack-plugin@3.2.0 --save-dev]<br>
- 配置webpack.config.js<br>
先导入<br>
后使用
   [new HtmlWebpackPlugin({
      template:'index.html' 依赖最开始的index.html中的[< div id="app">]生成dist文件夹中的模板
    })]<br>
###### UglifyjsWebpackPlugin
- 作用：
压缩js文件
- 安装：<br>
[npm install uglifyjs-webpack-plugin@1.1.1 --save-dev]
- 配置：
[const uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')]
[new uglifyjsWebpackPlugin()]
## day12 webpack配置本地服务器和模块分离
#### 扩充知识（cli前的认识）
##### 搭建本地服务器 
- 安装
[npm install webpack-dev-server@2.9.3 --save-dev]
- 配置
在webpack.config.js中配置<br>
在package.json中配置"dev":"webpack-dev-server --open"<br>
- 使用
在本地进行测试[npm run dev]，响应式修改呈现<br>
只有当确认之后再使用[npm run build]进行打包<br>
- 问题：未引用到打包的js文件（路径问题？）
解决：在之前配置url-loader时在webpack.config.js中配置生成图片的位置，此处删除;<br>
由于刚才已使用HtmlWebpackPlugin把文件打包到dist文件夹中的index.html，所以那里直接引用，不再在源文件夹的index.html中使用
##### 配置文件模块分离
- 开发时依赖 devDependencies
- 运行时依赖 dependencies
- 安装
[npm install webpack-merge@4.1.5 --save-dev]
- 文件分离与合并
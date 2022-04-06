# webpack
## day6 webpack day10 day11
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
      template:'index.html'
    })]<br>
###### UglifyjsWebpackPlugin
- 作用：
压缩js文件
- 安装：<br>
[npm install uglifyjs-webpack-plugin@1.1.1 --save-dev]
- 配置：
[const uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')]
[new uglifyjsWebpackPlugin()]
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
##### 配置文件模块分离
- 开发时依赖 devDependencies
- 运行时依赖 dependencies



## day7  CLI
###### CLI脚手架
- 作用：快速搭建Vue开发环境和对应的webpack配置
- 前提：node和npm
- 全局安装 最新版cli3 [npm install -g @vue/cli]
- 全局安装 拉取低版本cli2 [npm install -g @vue/cli init]
##### 创建项目
- cli2 [vue init webpack 项目名] 有很多选项
- cli3 [vue create 项目名]
- ES(js)-Lint 代码规范
- e2e(e to e)端到端测试
##### 初始化项目
- cli2[npm run dev]
- cli3[npm run serive]
- node可作为底层支撑，由C++和V8引擎组成，可将js直接转换为二进制代码[ 一般js->字节码->浏览器 ]
- 了解目录结构
- runtime-only相比于runtime-compiler性能更好，代码更少
##### 箭头函数
this是最近作用域里的this，一层一层向外查找   

## day8 webpack和CLI的完善
2022.4.1 摸鱼ing

## day9 vue-router(1)
3 days later 2022.4.4
### 知识点补充
##### 路由
现实中的路由：ip地址必须是唯一的，内网ip与公网ip的映射关系（需要补充计算机网络的知识）
##### 前端路由与后端路由
后端路由(后端负责处理URL和页面之间的映射关系)->
前后端分离(后端只负责提供数据，前端渲染，大部分内容是前端写的js代码在浏览器中执行的结果)->
前端路由：SPA(单页面富应用：整个网站只有一个html页面。一次请求全部资源，前端负责分离渲染，页面不刷新)
##### 改变url不发生刷新的方法
###### url的hash:
location.hash='路径名'
###### html5的history:
- history.pushState({},'','路径名')
类似于一个栈结构，可通过history.back()后退,history.forward()前进
- history.replaceState({},'','路径名') 无历史记录
- history.go(-1)后退 history.go(1)前进 
### vue-router
##### 安装
- 安装
[npm install vue-router --save]
- 导入路由对象，调用Vue.use(VueRouter)安装插件
- 创建路由实例，传入路由映射配置
- 在Vue实例中挂载创建的路由实例
##### 使用
- 创建路由组件

- 配置路由映射:组件-路由

可设置默认值，并将hash模式设置为history模式

- 使用路由：< router-link>和< router-view>
< router-link to='路径' tag='表现' replace active-class='active'>
active-class还可以在vue中修改
- 通过代码跳转路由
this.$router.push('路径')






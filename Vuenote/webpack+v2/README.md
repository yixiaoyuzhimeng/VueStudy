# webpack
## day6 webpack
#### 模块化的普通使用和commonJs使用了解
导入
const {add,mul}=require('./mathUtils.js')
导出
module.exports={add,mul}
#### es6的模块化使用
###### 1.导入
import {flag,sum} from "./aaa.js";
import {height,num1} from "./aaa.js"
导入类、对象 
import {sum1,Person} from "./aaa.js"; 
用export default导出的，导入时起名
import adder from from "./aaa.js"; 
导入时起别名
import * as aid from "./aaa.js"; 
###### 2.导出
导出已定义好的变量
export{
​	flag,sum
}
导出时定义变量
export var num1=1000;
导出时定义函数
export function sum1(num1,num2){
​	return num1+num2;
}
导出时定义类export class Person{}
export default 由导入者自己命名，在同意模块中，不允许同时存在多个
#### webpack
##### 作用
- 模块 将各种文件整合为模块来使用,处理模块之间相关的依赖
- 打包 
##### 安装
- webpack依赖node环境 
node为了正常执行代码，必须包含各种依赖包
npm用于管理包
- vue cli依赖webpack3.6.0 
全局安装[npm install webpack@3.6.0 -g] 
局部安装[npm install webpack@3.6.0 --save-dev]
终端中输入webpack获得的都是全局webpack
##### 使用
- 使用webpack打包
[webpack ./src/main.js(入) ./dist/bundle.js(出)]
 html中直接引用bundle.js
- 配置好直接打包[ webpack ]
webpack.config.js 中设置入口和出口(动态获取路径)
一旦准备使用nord就先进行初始化[npm init]生成package.json
若存在要使用的依赖，就使用[npm run install ~]安装依赖
- [npm run build]
在package.json的'scripts'中加入"build":"webpack"
这种方式会优先在本地里找webpack版本(局部安装)
##### 打包配置
######  loader 
- 将各种文件转化为浏览器可识别的文件
###### css
- 在main.js中导入css文件
[ require('./css/normal.css')]
- 安装
[npm install --save-dev css-loader@2.0.2]
[npm install --save-dev style-loader@0.23.1]
下载的插件默认是最新版本的，如果需要下载指定版本，则在插件名称后需要加上@版本号
- 配置 在webpack.config.js中的modules
[ 
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
         css-loader只加载，style-loader负责渲染到dom中
        }
      ]
    }
  }
]
###### less
- 导入
- 安装
[npm install --save-dev less-loader@4.1.0]
[npm install --save-dev less@3.9.0]
- 配置
{
  test: /\.less$/,
  use: [{
      loader: "style-loader" // creates style nodes from JS strings
  }, {
      loader: "css-loader" // translates CSS into CommonJS
  }, {
      loader: "less-loader" // compiles Less to CSS
  }]
}
###### url
- 导入
- 安装
[npm install --save-dev url-loader@1.1.2]
[npm install --save-dev file-loader@3.0.1]
并在output中配置生成图片的位置[ publicPath:'文件夹名']
还可修改生成图片的名字
- 配置
[
   {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
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
##### 使用Vue
- vue loader
##### 配置plugin
##### 搭建本地服务器
##### 模块分离
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
# cli
## day7  CLI 
##### 安装
- 作用：快速搭建Vue开发环境和对应的webpack配置
- 前提：node和npm
- 全局安装 最新版cli3 [npm install -g @vue/cli]
- 全局安装 拉取低版本cli2 桥接工具[npm install -g @vue/cli init]
##### 创建项目
- cli2 [vue init webpack 项目名] 有很多选项
- cli3 [vue create 项目名]
- ES(js)-Lint 代码规范
- e2e(e to e)端到端测试
- runtime-only与runtime-compiler只有main.js不同<br>
（1）compiler<br>
[components: { App },templp/>ate:'< Ap']<br>
template->ast->render->virtualdom->真实dom<br>
（2）only<br>
[ render: h => h(App)]<br>
render->virtualdom->真实dom<br>
性能更高，代码更少<br>
##### 初始化项目
- cli2[npm run dev]
- cli3[npm run serive]
- node可作为底层支撑，由C++和V8引擎组成，可将js直接转换为二进制代码[ 一般js->字节码->浏览器 ]
- 了解目录结构
##### cli3的配置
- [vue ui]进入界面
- 隐藏的配置文件
- 创建文件vue.config.js
##### es6中的箭头函数
this是最近作用域里的this，一层一层向外查找   
## day12 CLI(完善)
疑问：cli中打包后的只能放在服务器上部署么？怎么部署呢？有哪些可用的服务器呢？

# vue-router
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
## day13 vue-router(2) 
### vue-router
##### 使用
- 创建路由组件
- 配置路由映射:组件-路由
可用redirect设置默认路径，使用[ mode:'history']将hash模式设置为history模式
- 使用路由：< router-link>和< router-view>
< router-link to='路径' tag='表现' replace active-class='active'>
active-class还可以在vue中修改
- 通过代码跳转路由
【有点问题】
this.$router.push('路径') 
this.$router.replace('路径')
- 动态路由
(1)index.js中修改path名[ path:'/user/原路径:xx']
(2)在根组件< App>中动态绑定[ :to="'/user/'+xxxx"]
(3)如果想在组件中中使用数据[ $route.param.xx]
- vue-router打包
【问题：每种都有两个文件 .js和.js.map】
(1)app 当前应用程序开发的所有业务代码<br>
路由懒加载,防止app.js这个文件过大<br>
[ 用到时再加载：把不同路由对应的组件分割成不同的代码块]<br>
方法<br>
(1.1)结合Vue异步组件<br>
(1.2)AMD写法<br>
(1.3)ES6[ const Home=()=>import('/components/Home.vue')]<br>
(2)manifest 为打包的代码作底层支撑<br>
(3)vendor 第三方提供商<br>
##### 扩展
- 嵌套使用<br>
(1)创建对应的child组件，并且在路由映射中配置child路由<br>
(2)parent组件内部使用< router-view>< router-link><br>
- 参数传递<br>
(1)params
1.1)配置路由格式/router/:id
1.2)传递时在child组件的path后跟上对应的值/router/'+Id
1.3)传递后形成路径/router/Id
1.4)使用时可用$router.params.id获得Id值
(2)query
2.1)普通配置/router
2.2)传递时使用query的key作为传递方式
2.3)传递后形成路径/router?id=Id
- 所有组件都继承自Vue类的原型<br>
(1)router:VueRouter实例，想要导航到不同URL，则使用$router.push等方法<br>
(2)route:当前router跳转对象里面可以获取的值<br>
- 生命周期函数<br>
created()创建组件时<br>
mounted()template挂载时<br>
updated()界面发生刷新时<br>
- 守卫<br> 
(1)作用：监听跳转过程，修改网页标题<br>
(2)全局导航守卫<br>
(3)路由独享守卫<br>
(4)组件内的守卫<br>
- keep-alive
(1)vue内置组件，用于使被包含的组件保存状态，避免重新渲染(不断地创建与销毁)
(2)属性include和exclude,内容是字符串或正则表达式，用于缓存匹配的组件
(3)router-view如果被包在keep-alive里面，所有路径匹配到的视图组件都会被缓存

# tabbar
## day14 
##### 组件的嵌套使用+slot
##### 别名alias


# promise
## day15
##### promise
- es6语法
- 处理异步编程
对异步操作进行封装,阻止回调地狱
网络请求
- 三种状态
(1)padding:网络请求或定时器未到时间
(2)fulfill:主东回调resolve
(3)reject:主动回调reject
- 链式使用
（1）
（2）
- all方法
解决：



# vuex
## day16 day18
##### 作用
- 多个组件内共享的 状态(变量)管理,集中式，响应式
- 单页面状态管理 ->view->action->state-> 环形
- 多页面状态管理 state->VueComponents->(异步操作[ backend]Action->)->Mutation[ Devtools]->
##### 安装
- [npm install vuex@3.0.1 --save]
##### 使用
- 封装到一个文件并导出 
(1)安装插件<br>
(2)创建对象<br>
state:{data} state单一状态树<br>
mutations:{methods} 在此更新state,可使用payload传递参数,可用类型常量<br>
actions:{methodd}<br>
getters:{computation} 接受参数时使用函数<br>
modules:{}<br> 
(3)导出对象<br>
- 导入vuex使用 
1)$store.state.counter
2)$store.state.commit("")
3)$store.getters
- module的使用
1)state
2)mutation
3)getters
4)actions
- vuex-store文件夹目录组织


# 网络模块封装
## day16 day17
##### 安装使用
- install [npm install axios@0.18.0 --save]
- import 
- 基本使用
[ axios({url:''}).then(res=>{})]
[测试服务器网站 http://123.207.32.32:8000/home/multidata]
- 并发请求
[axios.all([ axios(),axios()]).then(results=>{})]
- 全局配置
[ axios.defaults.baseURL='http://123.207.32.32:8000']
##### 实例
[ const instance=axios.create({}) instance({})]
##### 模块封装
- 当引入第三方库时，要警惕多文件对其的依赖
- 导入
(1)参数中传入两个回调函数
(2)对象中设置回调函数
(3)，参数中传入两个会嗲凹函数
- 导出
(1)声明3个参数
(2)声明1个参数
(3)声明1个参数，函数中返回实例对象
##### 拦截器
- 请求拦截
- 响应拦截

 

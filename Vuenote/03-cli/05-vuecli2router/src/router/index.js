import Vue from 'vue'
import Router from 'vue-router'

// 4.导入组件
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 4.2 路由懒加载
const Home=()=>import('../components/Home')
const About=()=>import('../components/About')
const User=()=>import('../components/User')


// 1.通过Vue.use(插件),安装插件
Vue.use(Router)

// 2.创建VueRouter对象
const router=new Router({
  // 3.配置组件和路由之间的映射关系
  routes: [
    // 默认路由
    {
      path:'',
      // 重定向：
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      // 动态路由(1)：源路径加一个名字':xx'
      path:'/user/:user',
      component:User
    }
  ],
  // 设置为html5的history模式
  mode:'history',
  // 修改名称
  linkActiveClass:'active'

})

// 并导出
export default router;
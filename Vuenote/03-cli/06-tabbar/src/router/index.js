import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import("../views/home/Home")
const Kinds=()=>import("../views/kinds/Kinds")
const Cart=()=>import("../views/cart/Cart")
const My=()=>import("../views/my/My")



// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
const routes=[
  {
    path:'',
    redirect:'/home'
  }, 
  {
    path:'/home',
    component: Home
  },
  {
    path:'/kinds',
    component: Kinds
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/my',
    component: My
  },

]

const router=new Router({
  routes,
  mode:'history'
})

// 3.导出
export default router

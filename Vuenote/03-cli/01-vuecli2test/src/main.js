// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// const cpn={
//   template:'<div>{{message}}</div>',
//   data(){
//     return {
//       message:'我是组件message'
//     }
//   }
// }

// console.log(App)
// .vue文件中的template由vue-template-complier处理

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // render:function(createElement){
  //   // 1.普通用法：createElement('标签',{标签的属性},['内容'])
  //   // return createElement('h2',
  //   // {class:'box'},
  //   // ['hello',createElement('button',['按钮'])])
  //   // 2.传入组件对象：
  //   // return createElement(cpn)
  //   return createElement(App)
  // },
  // 箭头函数写法
  // render:(createElement)=>{
  //   return createElement(App)
  // }
})



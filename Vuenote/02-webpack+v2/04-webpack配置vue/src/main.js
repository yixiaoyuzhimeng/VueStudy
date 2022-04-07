// commonjs导入数据
const { add, mul } = require('./js/mathUtils.js')
console.log(add(20, 30))
console.log(mul(10, 2))

// ES6的导入数据
import { name, age } from './js/info'
console.log(name)
console.log(age)

// 导入css依赖
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')

document.writeln('<h2>hello</h2>')

// 5.使用Vue进行开发
import Vue from 'vue'


// 5.2 使用template替换
// const app=new Vue({
//   el:'#app',//用于挂载div
//   template:`
//     <div>
//       <h1>{{message}}</h1>
//       <button @click='btnClick'>按钮</button>
//     </div>
//   `,//自动替换挂载的div
//   data:{
//     message:'hello'
//   },
//   methods:{
//     btnClick(){
//       console.log('按钮已点击')
//     }
//   }
// })


// 5.3方法二：使用组件
// const App = {
//   template: `
//   <div>
//   <h1>{{message}}</h1>
//   <button @click='btnClick'>按钮</button>
//   </div>
//   `,
//   data() {
//     return {
//       message: 'hello'
//     }
//   },
//   methods: {
//     btnClick() {
//       console.log('按钮已点击')
//     }
//   }
// }
// new Vue({
//   el: '#app',
//   template: `<App/>`,//使用组件
//   components: {
//     App//在组件中注册（使用变量的增强写法）
//   }
// })

// 方法四：使用组件，模块化分离写法
// import App from './vue/app'
// new Vue({
//   el: '#app',
//   template: `<App/>`,//使用组件
//   components: {
//     App//在组件中注册（使用变量的增强写法）
//   }
// })

// 方法五：
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: `<App/>`,//使用组件
  components: {
    App//在组件中注册（使用变量的增强写法）
  }
})
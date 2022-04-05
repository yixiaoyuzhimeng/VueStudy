// commonjs导入数据
const {add,mul}=require('./js/mathUtils.js')
console.log(add(20,30))
console.log(mul(10,2))

// ES6的导入数据
import {name,age} from './js/info'
console.log(name)
console.log(age)

// 导入css依赖
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')

document.writeln('<h2>hello</h2>')

// 5.使用Vue进行开发
import Vue from 'vue'

const app=new Vue({
  el:'#app',
  template:`
  <div>
  <h1>{{message}}</h1>
  <button @click='btnClick'>按钮</button>
  </div>
  `,
  data:{
    message:'hello'
  },
  methods:{
    btnClick(){
      console.log('按钮已点击')
    }
  }
})

const  App={
  el:'#app',
  template:`
  <div>
  <h1>{{message}}</h1>
  <button @click='btnClick'>按钮</button>
  </div>
  `,
  data:{
    message:'hello'
  },
  methods:{
    btnClick(){
      console.log('按钮已点击')
    }
  }
}

new Vue({
  el:'#app',
  template:`<App/>`,
  components: {
    App
  }
})
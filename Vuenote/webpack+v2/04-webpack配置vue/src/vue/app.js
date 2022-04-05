export default{
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
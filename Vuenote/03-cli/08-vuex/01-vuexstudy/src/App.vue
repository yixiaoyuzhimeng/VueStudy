<template>
  <div id="app">
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步操作</button>
    <h2>--------APP:info对象的内容是否是响应式的----</h2>
    <h3>{{ $store.state.info }}</h3>
    <button @click="updateInfo">修改信息</button>
    <h2>------APP---------</h2>
    <h3>{{ $store.state.counter }}</h3>
    <h3>{{ $store.state.students }}</h3>
    <!-- <ul>
      <li v-for="item in $store.state.students">{{item}}</li>
    </ul> -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">stu</button>
    <h2>-------APP:getters-----------</h2>
    <h3>{{ $store.getters.powerCounter }}</h3>
    <h3>{{ $store.getters.more14stu }}</h3>
    <h3>{{ $store.getters.more14stuLength }}</h3>
    <h3>{{ $store.getters.moreAgeStu(16) }}</h3>
    <h2>-----Hello---------</h2>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import {INCREMENT} from './store/mutation-types'

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    },
    updateName(){
      this.$store.commit('updateName','lisi')
    },
    addition() {
      // 使用commit提交原来的方法
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // payload传递参数方式
      // 1.普通的提交封装
      // this.$store.commit("incrementCount",count)
      // 2.特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addStudent() {
      const stu = { id: 1, name: "alan", age: 10 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // this.$store.commit("updateInfo");
      // 异步操作
      // this.$store.dispatch('aUpdateInfo','我是加入的参数')
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是加入的参数',
      //   success:()=>{
      //     console.log('成功实现')
      //   }
      // })
      this.$store.dispatch('aUpdateInfo','我是加入的参数')
      .then(res=>{
        console.log('成功实现')
        console.log(res)
      })
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

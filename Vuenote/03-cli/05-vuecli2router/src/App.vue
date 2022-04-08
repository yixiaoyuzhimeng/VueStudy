<template>
  <div id="app">
    <!-- router-link和router-view是vue-router内置的全局组件 -->
    <!-- router-link导航组件，
    默认会被渲染为a标签,可使用tag渲染为其他形式
    replace [history.replaceState({},'','路径名')]
    active -->
    <!-- router-view渲染组件本身 -->
    <router-link to="/home"  replace >首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <!-- 动态路由（2）拼接真实路径名 -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view></router-view>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      // 动态改变拼接的映射名
      userId:'lily'
    }
  },
  methods:{
    // 通过代码的方式修改路径
    homeClick(){
      // this.$router.push('/home')
      //  this.$router.replace('/home')
      // console.log('home')
      // console.log(this.$router)
    },
    aboutClick(){
      // this.$router.push('/about')
      // this.$router.replace('/about')
      // console.log('about')
    }
  }
}
</script>

<style>
  /* .router-link-active{
    color:red
  } */
  .active{
    color:red
  }
</style>

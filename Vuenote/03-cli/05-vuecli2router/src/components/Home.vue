<template>
  <div>
    <h2>我是首页</h2>
    <p>home</p> 
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
 
  </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return{
      message:'hello'
    }
  },
  created () {
    console.log('created')
  },
  destroyed () {
    console.log('destroyed')
  },
  // 这两个函数只有该组件被保持了状态使用keep-alive才有效
  activated () {
    console.log('activated');
    this.$router.push(this.path)
  },
  deactivated () {
    console.log('deactivated')
  },
  beforeRouteLeave(to, from, next)  {
    this.path=this.$route.path;
    next();
  }
}
</script>


<style scoped>

</style>

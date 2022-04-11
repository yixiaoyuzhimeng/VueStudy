<template>
  <div>
    <h2>用户界面</h2>
    <p>user</p>
    <h4>{{userId}}</h4>
    <h4>{{$route.params.user}}</h4>
  </div>
</template>

<script>
  export default{
    name:'User',
    computed: {
      userId(){
        // this.$route获取当前处于活跃状态的routes(index.js文件中)
        // .params.xx
        return this.$route.params.user
      }
    },
  created () {
    console.log('created')
  },
  destroyed () {
    console.log('destroyed')
  },
  }
</script>

<style>

</style>
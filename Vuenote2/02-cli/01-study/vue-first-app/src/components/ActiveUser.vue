<template>
  <div>
    <!-- 1.0 直接使用props中传来的键获取值 -->
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
    <!-- 3.01触发事件 -->
    <button @click="deleteUser">删除此用户</button>
  </div>
</template>

<script>
export default {
  // name:'active-user',
  // 1.0:要传入的键名称
  props:{
    username:String,
    age:String,
  },
  // 3.02 声明事件名称？可有可无
  emits:['deleteUser'],
  methods:{
    deleteUser(){
      // 3.02 定义事件名称
      this.$emit("deleteUser",this.username);
    }
  }
}
</script>

<style>

</style>
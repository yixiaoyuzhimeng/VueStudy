<template>
  <!-- 3.01 触发组件的事件-->
  <form action="" @submit.prevent="submitInfo">
    <div>
    <span>name:</span>
    <input type="text" v-model="name">
    </div>
    <div>
      <span>age:</span>
      <input type="text" v-model="age">
    </div>
    <div>
      <button>
        提交
      </button>
    </div>
  </form>
 
</template>

<script>
export default {
  emits:['passedInfo'],
  data(){
    return {
      name:'',
      age:'',
    }
  },
  methods:{
    submitInfo(){
      // 3.02 定义事件名称（vue实例中要使用的）
      this.$emit('passedInfo',this.name,this.age);
    }
  }
}
</script>

<style>

</style>
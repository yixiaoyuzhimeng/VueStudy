<template>
  <div>
    <h1 class='title'>{{ message }}</h1>
    <button @click="btnClick">按钮啦啦啦啦啦ashgfkasgf</button>
    <Cpn/>
    <!-- 使用组件 -->
  </div>

</template>

<script>
import Cpn from './Cpn.vue'
export default {
  name: "App",
  // 注册组件
  components: {
    Cpn
  },
  data() {
    return {
      message: "hello",
    };
  },
  methods: {
    btnClick() {
      console.log("按钮已点击App，这里做了修改");
    },
  },
};
</script>
<style scope>
  .title{
    color:azure
  }
</style>
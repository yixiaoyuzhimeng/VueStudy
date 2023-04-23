<template>
<header>
  <h1>test</h1>
</header>

<div>
  <!-- 3.1 user-data组件 伴随 事件(组件emit中定义的名称【不能改】) 会传来一些参数 -->
  <!-- 3.2 使用v-on响应事件，方法函数来应对 -->
  <user-data @passedInfo="commitInfo">
  </user-data>
</div>

<div>
  <!-- 1.1.active-user组件，通过props传递数据，在vue实例中，键（组件props中定义的名称【不能改】）:"值（要传入的内容）" -->
  <!-- 1.2.通过v-for从vue实例中获取数据，通过v-bind绑定要传送的数据 -->
  <!-- 3.1 3.2 -->
  <ul>
    <active-user 
      v-for=" info in infos" 
      :key="info.username"
      :username="info.username" 
      :age="info.age" 
      @deleteUser="deleteUser"
      >
    </active-user>
  </ul>

</div>
</template>

<script>
export default {
  data(){
    return {
      infos:[
        {
          username:'a',
          age:'10'
        },
        {
          username:'b',
          age:'11'
        },
        {
          username:'c',
          age:'12'
        }
      ]
    }
  },
  methods:{
    // 3.3 方法中可以直接使用3.0传来的参数，参数名称可以自己定
    commitInfo(name,age){
      const info={
        username:name,
        age:age
        // age:+age,
        // 将传来的字符串转化为数字
      }
      this.infos.push(info);
    },
    deleteUser(username){
      this.infos=this.infos.filter(info=>info.username!=username);
    }
  },
}
</script>

<style>

</style>

<template>
  <div id="app">
    <!-- router-link和router-view是vue-router内置的全局组件 -->
    <!-- router-link导航组件，
    默认会被渲染为a标签,可使用tag渲染为其他形式
    replace [history.replaceState({},'','路径名')]
    active -->
    <!-- router-view渲染组件本身 -->
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <!-- 动态路由（2）拼接真实路径名 -->
    <!-- 参数传递params -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- 参数传递query -->
    <!-- url :scheme://host:port/path?query#fragment -->
    <router-link :to="{path:'/profile',query:{name:'why',age:19,height:1.88}}">档案</router-link>
    <!-- 代码实现参数传递:出现问题 -->
    <!-- <button @click="uClick">User</button>
    <button @click="pClick">Profile</button> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 动态改变拼接的映射名
      userId: "lily"
    };
  },
  methods: {
    // 通过代码的方式修改路径
    homeClick() {
      // this.$router.push('/home')
      //  this.$router.replace('/home')
      // console.log('home')
      // console.log(this.$router)
    },
    aboutClick() {
      // this.$router.push('/about')
      // this.$router.replace('/about')
      // console.log('about')
    },
    // uClick() {
    //   console.log("1");
    //   // this.$router.push('/user/'+this.userId)
    // },
    // pCilck() {
    //   console.log("2");
    //   // this.$router.push({
    //   //   path:'/profile',
    //   //   query:{
    //   //     name:'koko',
    //   //     age:19,
    //   //     height:1.88
    //   //   }
    //   // })
    // },
  },
};
</script>

<style>
/* .router-link-active{
    color:red
  } */
.active {
  color: red;
}
</style>

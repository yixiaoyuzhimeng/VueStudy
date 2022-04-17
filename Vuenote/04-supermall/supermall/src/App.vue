<template>
 <div id="id">
   <router-view/>
   <MainTabBa/>

 </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
 
}
</script>

<style>
  @import "./assets/css/base.css";

</style>

<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/mainTabbar/MainTabBar.vue"

export default {
  components: { MainTabBar },
  name: "App",
};
</script>

<style>
@import "assets/css/base.css";
</style>

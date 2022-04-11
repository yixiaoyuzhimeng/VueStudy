<template>
  <div>
    <h2>Profile</h2>
    <h4>{{ $route.query }}</h4>
    <h4>{{ $route.query.name }}</h4>
    <h4>{{ $route.query.age }}</h4>
    <h4>{{ $route.query.height }}</h4>
  </div>
</template>

<script>
export default {
  name: "Prifile",
  created () {
    console.log('created')
  },
  destroyed () {
    console.log('destroyed')
  },  
};
</script>

<style>
</style>
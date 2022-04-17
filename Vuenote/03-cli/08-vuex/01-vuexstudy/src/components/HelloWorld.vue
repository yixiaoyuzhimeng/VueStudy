<template>
  <div class="hello">
    <h2>{{$store.state.counter}}</h2>
    <h3>{{$store.getters.powerCounter}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>


<style scoped>

</style>

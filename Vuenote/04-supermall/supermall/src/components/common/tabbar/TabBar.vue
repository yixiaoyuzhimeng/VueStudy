<template>
   <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'TabBar',
}
</script>

<style>
#tab-bar {
  /* 设置容器类型：弹性布局？ */
  display: flex;
  background-color: #f6f6f6;
  /* 绝对定位？ */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100,100,100,0.08);
}


</style>
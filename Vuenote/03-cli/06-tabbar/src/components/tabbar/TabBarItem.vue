<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods: {
    itemClick(){
      if(this.$route.path!=this.path){
        this.$router.replace(this.path);
      }
   
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  /* 将item均等分 */
  flex: 1;
  /* 将每个item内容靠中 */
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}

.active {
  color: red;
}
</style>
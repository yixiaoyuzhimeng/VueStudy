<template>
  <div id="main-tab-bar">
    <TabBar>
      <TabBarItem path="/home" >
         <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home (1).svg" alt="" />
        <div slot="item-text">首页</div>
      </TabBarItem>
       <TabBarItem path="/kinds" >
         <img slot="item-icon" src="~assets/img/tabbar/kinds.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/kinds (1).svg" alt="" />
        <div slot="item-text">分类</div>
      </TabBarItem>
       <TabBarItem path="/cart" >
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/cart (1).svg" alt="" />
        <div slot="item-text">购物车</div>
      </TabBarItem>
       <TabBarItem path="/my" >
         <img slot="item-icon" src="~assets/img/tabbar/my.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/my (1).svg" alt="" />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem";
import TabBar from "components/common/tabbar/TabBar";


export default {
  components: { TabBar, TabBarItem },
  name: "MainTabBar",
};
</script>

<style>

</style>

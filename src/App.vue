<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import "@assets/img/tabbar/iconfont.css";
import "@assets/img/backtop/iconfont.css";
import "@assets/img/back/iconfont.css";
import MainTabBar from "@components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "@assets/css/base.css";
</style>

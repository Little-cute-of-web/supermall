<template>
  <div class="back-top">
    <i class="iconfont icon-iconfontbacktop"></i>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  methods: {
    // backToTop() {
    //   console.log("回到顶部");
    // },
  },
};
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
  text-align: center;
  line-height: 60p;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: blanchedalmond;
  /* background-color: #aaa; */
}
.icon-iconfontbacktop {
  font-size: 60px;
}
</style>

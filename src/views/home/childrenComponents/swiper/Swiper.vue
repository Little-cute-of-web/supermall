<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.acm">
        <img v-lazy="item.image" />
      </van-swipe-item>
      <!-- <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item> -->
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    banner: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 150px;
  /* line-height: 390px; */
  text-align: center;
  background-color: #39a9ed;
}
</style>

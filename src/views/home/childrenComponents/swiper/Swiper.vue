<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.acm">
        <a :href="item.ink">
          <img v-lazy="item.image" @load="bannerLoad" />
        </a>
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
    return {
      isLoad: false,
    };
  },
  methods: {
    //因为我们只需要获取第一次banner加载完毕的值，定义一个变量记录第一次记载完成，当事件发出第一次后后面就不用再发了
    // 此处不合适用debounce，debounce适用于过一会还要发
    bannerLoad() {
      if (!this.isLoad) {
        this.$emit("bannerImgLoad");
        this.isLoad = true;
      }
    },
  },
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
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>

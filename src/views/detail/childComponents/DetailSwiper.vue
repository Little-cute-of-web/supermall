<template>
  <div>
    <van-swipe class="my-swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in topImgs" :key="item">
        <a>
          <img v-lazy="item" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import Swiper from "@components/common/swiper/Swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImgs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    // Swiper,
  },
};
</script>
<style scoped>
.my-swiper .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* height: 300px; */
  /* line-height: 390px; */
  text-align: center;
  background-color: #39a9ed;
}
.my-swiper .van-swipe-item img {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>

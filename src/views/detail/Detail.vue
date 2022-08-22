<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImgs="topImgs" />
  </div>
</template>

<script>
//导入组件
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import { getDetail } from "@network/details.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImgs: [],
    };
  },
  created() {
    // console.log(this.$route);
    this.iid = this.$route.params.iid;
    //传入iid 获取商品详情
    getDetail(this.iid).then((res) => {
      console.log(res);
      //获取商品详情顶部轮播图
      this.topImgs = res.result.itemInfo.topImages;
      console.log(this.topImgs);
    });
  },
  methods: {},
  components: {
    DetailNavBar,
    DetailSwiper,
  },
};
</script>
<style scoped></style>

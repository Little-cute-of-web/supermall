<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImgs="topImgs" />
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
//导入组件
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
//导入获取数据
import { getDetail, Goods } from "@network/details.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
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
      // console.log(this.topImgs);
      //获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      console.log(this.goods);
    });
  },
  methods: {},
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
};
</script>
<style scoped></style>

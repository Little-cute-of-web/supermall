<template>
  <div class="goods-list-wrapper" ref="goodsListWrapper">
    <div class="goods-list" ref="goodsList">
      <goods-list-item
        v-for="item in goods"
        :key="item.link"
        :goods-item="item"
      ></goods-list-item>
    </div>
  </div>
</template>

<script>
// import BScroll from "better-scroll";
// import PullUp from "@better-scroll/pull-up";
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // scroll: null,
    };
  },
  mounted() {},

  components: {
    GoodsListItem,
  },
  methods: {},
};
</script>
<style scoped>
/* .goods-list-wrapper {
  height: 667px;
} */
.goods-list {
  display: flex;
  flex-wrap: wrap;
  /* height: 500px; */
}
</style>

<template>
  <div class="scroll-wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUp: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //创建scroll对象
    this.scroll = new BScroll(this.$refs.scroll, {
      // probeType: 3, //有的组件需要监听有的不需要监听，如果在scroll里面直接监听，对于那些不需要监听的组件比较浪费性能，所以传入比较合适
      // click: false,
      probeType: this.probeType,
      observeDOM: true,
      pullUpLoad: this.pullUp,
    });
    //监听滚动事件
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    //监听上拉事件
    this.scroll.on("pullingUp", () => {
      console.log("加载更多");
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    //完成加载更多调用finish
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>
<style scoped></style>

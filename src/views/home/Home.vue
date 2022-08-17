<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div class="homeTitle">购物街</div>
      </template>
    </nav-bar>
    <tab-control
      v-show="isShow"
      :titles="titles"
      class="tab-control"
      @tabChange="tabChange"
      ref="tabControl"
    ></tab-control>
    <scroll
      class="content"
      :probeType="3"
      :pullUp="true"
      ref="scroll"
      @scroll="getScrollPosition"
      @pullingUp="loadMore"
    >
      <swiper :banner="banner" @bannerImgLoad="bannerImgLoad"></swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        :titles="titles"
        @tabChange="tabChange"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backToTop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
//home组件私有
import Swiper from "@childrenComponents/swiper/Swiper.vue";
import HomeRecommend from "@childrenComponents/homeRecommend/HomeRecommend";
import HomeFeature from "@childrenComponents/homeFeature/HomeFeature";
//引入项目公共组件
import NavBar from "@components/common/navbar/NavBar";
import TabControl from "@components/content/tabControl/TabControl";
import GoodsList from "@components/content/goods/GoodsList";
import Scroll from "@components/common/scroll/Scroll";
import BackTop from "@components/content/backtop/BackTop";
//引入方法
import { getHomeMultidata, getHomeGoods } from "@network/home.js";
import { debounce } from "@common/utils";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      //首页tab切换数据
      titles: [
        {
          id: 1,
          title: "流行",
        },
        {
          id: 2,
          title: "新款",
        },
        {
          id: 3,
          title: "精选",
        },
      ],
      //tab对应的数据结构
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      scroll: null,
      showBackTop: false,
      tabControlOffsetTop: 0,
      isShow: false,
    };
  },
  created() {
    this.getHomeMultidata();
    //请求流行数据
    this.getHomeGoods("pop");
    //2.请求新款数据
    this.getHomeGoods("new");
    // 3.请求精选数据
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    //监听img加载完成，scroll 再重新计算所有组件高度
    this.$bus.$on("imgLoad", () => {
      //结构加载完成去
      // this.getHomeGoods(this.currentType);
      refresh();
    });
    //获取组件tabControl的offsetTop  这里获取的GAP度并不一定正确，因为图片或许可能还没有加载回来   处理：监听banner加载完毕 在进行获取offsetTop
    // console.log(this.$refs.tabControl.$el.offsetTop);
    // this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    // tabControlOffsetTop <= 0 ? (tabControlOffsetTop = 0) : tabControlOffsetTop;
  },

  components: {
    Swiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  methods: {
    /*
     * 事件监听
     * 现在用来scroll不起作用
     */
    tabChange(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backToTop() {
      //这样写比较不好  在scroll里面定义一个方法，点击组件的时候调用这个方法即可
      // let scroll = this.$refs.scroll.scroll.scrollTo(0, 0, 500);
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    getScrollPosition(position) {
      // console.log(position);
      let { y } = position;
      // let tabOffsetTop=this.$refs.tabControl.$el.offsetTop
      // y <= -this.tabControlOffsetTop
      //   ? (this.$refs.tabControl.$el.offsetTop = "44px")
      //   : this.$refs.tabControl.$el.offsetTop;
      //tabControl是否吸顶
      // console.log(-y); // 此种方案行不通
      // console.log(this.tabControlOffsetTop);
      -y >= this.tabControlOffsetTop
        ? (this.isShow = true)
        : (this.isShow = false);
      //backTop是否显示
      y < -1000 ? (this.showBackTop = true) : (this.showBackTop = false);
      // console.log(this.showBackTop);
    },
    //监听banner记载完毕
    bannerImgLoad() {
      // console.log("------banner加载完毕---------");
      //在此处获取 tabControl offsetTop
      // let bannerLoaded = debounce(this.bannerLoad, 500);
      // bannerLoaded();
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /*
     * 网络请求相关
     */
    //请求主页banner*recommend
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    //请求主页的tab数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      // console.log(page);
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        //页码加一
        this.goods[type].page += 1;
        // this.$refs.scroll.finishPullUp();
        this.$refs.scroll.finishPullUp();
      });
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      //修复因图片异步加载导致scroll开始计算错的高度，当图片加载完成后近refresh操作，获取由来图片后的dom高度 ，方案不好，使用事件总线解决
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>
<style scoped>
#home {
  /* way1  设置中间home组件的高度*/

  /* height: 100vh; */
  /* way2  设置中间home组件的高度*/
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;
}
.nav-home {
  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动，现在使用better-scroll没有用了 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 9; */
  background-color: var(--color-tint);
  color: #fff;
}
.homeTitle {
  line-height: 44px;
  font-size: 18px;
}
#home li {
  height: 10px;
}

.tab-control {
  /* position: sticky; */
  position: relative;
  /* top: 44px; */
  left: 0;
  z-index: 99;
}
.content {
  /* height: calc(100% - 93px); */
  /* height: 400px; */
  /* way1  设置中间home组件的高度*/
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
  /* way2  设置中间home组件的高度*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .fixed {
  //这个方案行不通
  position: fixed;
  margin-top: 44px;
} */
</style>

<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div class="homeTitle">购物街</div>
      </template>
    </nav-bar>
    <scroll
      class="content"
      :probeType="3"
      :pullUp="true"
      ref="scroll"
      @scroll="getScrollPosition"
      @pullingUp="loadMore"
    >
      <swiper :banner="banner"></swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        :titles="titles"
        class="tab-control"
        @tabChange="tabChange"
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
//引入插件

import { getHomeMultidata, getHomeGoods } from "@network/home.js";
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
    };
  },
  mounted() {},
  created() {
    this.getHomeMultidata();
    //请求流行数据
    this.getHomeGoods("pop");
    //2.请求新款数据
    this.getHomeGoods("new");
    // 3.请求精选数据
    this.getHomeGoods("sell");
    this.$bus.$on("imgLoad", () => {
      //结构加载完成去
      // this.getHomeGoods(this.currentType);
      this.$refs.scroll.refresh();
    });
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
      y < -1000 ? (this.showBackTop = true) : (this.showBackTop = false);
      // console.log(this.showBackTop);
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
      });
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      //修复因图片异步加载导致scroll开始计算错的高度，当图片加载完成后近refresh操作，获取由来图片后的dom高度 ，方案不好，使用事件总线解决
      this.$refs.scroll.refresh();
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
  padding-top: 44px;
  height: 100vh;
}
.nav-home {
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 9;
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
  position: sticky;
  top: 44px;
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
</style>

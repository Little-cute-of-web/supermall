<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div class="homeTitle">购物街</div>
      </template>
    </nav-bar>
    <swiper :banner="banner"></swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-feature></home-feature>
  </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar';
import Swiper from '@childrenComponents/swiper/Swiper.vue';
import HomeRecommend from '@childrenComponents/homeRecommend/HomeRecommend';
import HomeFeature from '@childrenComponents/homeFeature/HomeFeature'
import {getHomeMultidata} from '@network/home.js';
export default {
  name:'Home',
  data() {
    return {
      banner:[],
      recommend:[]
    }
  },
  methods:{

  },
  components:{
    NavBar,
    Swiper,
    HomeRecommend,
    HomeFeature
  },
  created(){
    //请求主页数据
    getHomeMultidata().then(res=>{
      this.banner=res.data.banner.list;
      this.recommend=res.data.recommend.list;
    })
  }
}
</script>
<style scoped>
#home{
  padding-top: 44px;
}
.nav-home{
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 9;
  /* margin-bottom: 44px; */
  /* top: 0;
  padding-top: 44px; */
  
  background-color: var(--color-tint);
  color: #fff;
}
.homeTitle{
  line-height: 44px;
  /* color: #ff5198; */
  font-size: 18px;
}
</style>
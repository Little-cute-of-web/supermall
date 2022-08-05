<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div class="homeTitle">购物街</div>
      </template>
    </nav-bar>
    <swiper :banner="banner"></swiper>
  </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar';
import Swiper from '@childrenComponents/swiper/Swiper.vue';
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
    Swiper
  },
  created(){
    //请求主页数据
    getHomeMultidata().then(res=>{
      // console.log(res);
      this.banner=res.data.banner.list;
      this.recommend=res.data.recommend.list;
      console.log(this.homeData);
    })
  }
}
</script>
<style scoped>
.nav-home{
  background-color: var(--color-tint);
  color: #fff;
}
.homeTitle{
  line-height: 44px;
  /* color: #ff5198; */
  font-size: 18px;
}
</style>
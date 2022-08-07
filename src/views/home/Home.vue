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
    <tab-control :titles="titles" class="tab-control"
    @tabChange="tabChange"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <!-- <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul> -->
  </div>
</template>

<script>
//home组件私有
import Swiper from '@childrenComponents/swiper/Swiper.vue';
import HomeRecommend from '@childrenComponents/homeRecommend/HomeRecommend';
import HomeFeature from '@childrenComponents/homeFeature/HomeFeature';
//引入项目公共组件
import NavBar from '@components/common/navbar/NavBar';
import TabControl from '@components/content/tabControl/TabControl';
import GoodsList from '@components/content/goods/GoodsList';
import {getHomeMultidata,getHomeGoods} from '@network/home.js';
export default {
  name:'Home',
  data() {
    return {
      banner:[],
      recommend:[],
      //首页tab切换数据
      titles:[
        {
          id:1,
          title:'流行'
        }, {
          id:2,
          title:'新款'
        },{
          id:3,
          title:'精选'
        }
      ],
      //tab对应的数据结构
      goods:{
        'pop':{
          page:0,
          list:[]
        },
        'new':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        }
      },
      currentType:'pop'
    }
  },
  components:{
    Swiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl,
    GoodsList
  },
  created(){
    this.getHomeMultidata();
    //请求流行数据
    this.getHomeGoods('pop');
    //2.请求新款数据
    this.getHomeGoods('new');
    // //3.请求精选数据
    this.getHomeGoods('sell');
  },  
  methods:{
    /* 
    * 事件监听
    */
    tabChange(index){
      switch(index){
      case 0:
        this.currentType='pop';
        break;
      case 1:
        this.currentType='new';
        break;
      case 2:
        this.currentType='sell';
        break;
      }
    },
    /* 
    * 网络请求相关
    */
    //请求主页banner*recommend
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      });
    },
    //请求主页的tab数据
    getHomeGoods(type){
      const page = this.goods[type].page+1;
      // console.log(page);
      getHomeGoods(type,page).then(res=>{
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        //页码加一
        this.goods[type].page+=1;
      })
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
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
  background-color: var(--color-tint);
  color: #fff;
}
.homeTitle{
  line-height: 44px;
  font-size: 18px;
}
#home li{
  height: 10px;
}
   
.tab-control{
position: sticky;
top: 44px;
z-index:99;
}
</style>
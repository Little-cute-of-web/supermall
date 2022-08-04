<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div class="homeTitle">购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar';
import {getHomeMultidata} from '@network/home'
export default {
  name:'Home',
  data() {
    return {
        
    }
  },
  methods:{

  },
  components:{
    NavBar
  },
  created(){
    //请求数据
    getHomeMultidata().then(res=>{
      console.log(res);
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
<template>
   <div class="tab-bar-item" @click="TabBarClick"> 
     <div v-if="!isActive"><slot  name="item-icon"></slot></div>
     <div v-else><slot  name="item-icon-active"></slot></div>
     <div  :style="activeStyle"><slot  name="item-text"></slot></div>
   </div>
    <!-- <div class="tab-bar-item">首页</div> -->
    <!-- <div class="tab-bar-item">分类</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">我的</div> -->
</template> 

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'#f00'
    }
  },
  data() {
    return {
      // isActive:true
    };
  },
  methods: {
    TabBarClick(){
      this.$router.push(this.path);
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1;
    },
    activeStyle(){
      return  this.isActive?{color:this.activeColor}:{};
    }
  }
};
</script>
<style scoped>
.tab-bar-item{
  flex:1;
  /* height: 49px; */
  text-align: center;
  /* font-size: 16px; */
}
</style>

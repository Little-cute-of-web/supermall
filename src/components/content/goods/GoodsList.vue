<template>
  <div class="goods-list-wrapper" ref="wrapper">
    <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.acm" :goods-item="item"></goods-list-item>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default:()=>[]
    }
  },
  mounted(){
    this.$nextTick(()=>{
      // this.scroll=new BScroll(this.$refs.GoodsListWrapper,{})
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {})
        // this.scroll.on('touchEnd', (pos) => {
        //   // 下拉动作
        //   if (pos.y > 50) {
        //     this.loadData()
        //   }
        // })
      } else {
        this.scroll.refresh()
      }
    })
  },
  data() {
    return {
        
    }
  },
  components:{
    GoodsListItem
  },
  methods:{

  }
}
</script>
<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
}
</style>
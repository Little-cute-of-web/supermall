<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.acm" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default:()=>[]
    }
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
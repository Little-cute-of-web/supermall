<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
       <p>{{ goodsItem.title }}</p>
       <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
    <!-- <div class="desc">
      <p>{{ goodsItem.title }}</p>
    </div>
    <div class="price-collect">
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.goods-list-item {
  position: relative;
  width: 50%;
  text-align: center;
  padding-bottom:40px;
}
.goods-list-item img {
  width: 175px;
}
.goods-info{
  overflow: hidden;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  padding:0 7px ;
  text-align: center;
  font-size: 12px;
}
.goods-info p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
 /* .goods-info .collect{
  position: relative;
} 
.goods-list-item p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-list-item .desc {
  padding: 0 5px;
} 

.price-collect{
  display: flex;
   justify-content: space-between; 
  padding: 0 5px;
  
}
.price-collect span{
  flex:1;
  text-align: center;
} */
</style>

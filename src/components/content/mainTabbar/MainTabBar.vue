<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <i class="iconfont icon-shouye" slot="item-icon"></i>
        <i class="iconfont icon-a-3d" slot="item-icon-active"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <i class="iconfont icon-fenlei" slot="item-icon"></i>
        <i class="iconfont icon-Butterfly" slot="item-icon-active"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <i class="iconfont icon-zhixianghuishou" slot="item-icon"></i>
        <i class="iconfont icon-a-Diagramroot" slot="item-icon-active"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <i class="iconfont icon-wode" slot="item-icon"></i>
        <i class="iconfont icon-Hexagons" slot="item-icon-active"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@components/common/tabbar/TabBar.vue';
import TabBarItem from '@components/common/tabbar/TabBarItem';
export default {
  name:'MainTabBar',
  data() {
    return {
        
    }
  },
  methods:{

  },
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>

</style>
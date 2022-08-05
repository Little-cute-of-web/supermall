<template>
  <div class="tab-control">
    <div class="tab-item" v-for="(item,index) in titles" :key="item.id"
    :class="{active:currentIndex===index}"
    @click="changeTab(index)"
    >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex:0
    };
  },
  methods: {
    changeTab(index){
      this.currentIndex=index;
      this.$emit('tabChange',index);
    }
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  /* height: 40px;
  line-height: 40px; */
  font-size: 16px;
  text-align: center;
}
.tab-item {
  flex: 1;
   height: 40px;
  line-height: 40px;
}
.tab-item span{
  padding: 5px;
}
.active span{
  /* margin-top:5px; */
  border-bottom: 3px solid var(--color-tint);
}
.active{
  color: pink;
}
</style>

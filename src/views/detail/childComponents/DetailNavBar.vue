<template>
  <div>
    <nav-bar>
      <template #left>
        <span
          class="iconfont icon-yiliaohangyedeICON-"
          @click="backToLast"
        ></span>
      </template>
      <template #center>
        <div class="nav-titles-wrapper">
          <div
            class="nav-titles"
            v-for="(item, index) in titles"
            :class="{ active: index === currentIndex }"
            @click="changeNavTitle(index)"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
      </template>
      <template #right></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "推荐", "评论"],
      currentIndex: 0,
    };
  },
  methods: {
    changeNavTitle(index) {
      console.log(index);
      this.currentIndex = index;
    },
    backToLast() {
      console.log(this.$router);
      this.$router.back();
    },
  },
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.nav-titles-wrapper {
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.nav-titles {
  flex: 1;
  /* text-align: center; */
  line-height: 44px;
}
.active {
  color: var(--color-high-text);
}
.iconfont {
  line-height: 44px;
}
</style>

<template>
  <div class="home-recommend-wrapper">
    <div class="home-recommend">
      <div
        class="recommend-item-wrapper"
        v-for="item in recommend"
        :key="item.img"
      >
        <a :href="item.href">
          <div class="recommend-item">
            <img :src="item.image" alt="顾千帆" />
            <div class="title">{{ item.title }}</div>
          </div>
        </a>
      </div>
      <!-- <div class="recommend-item-wrapper">
        <div class="recommend-item">1</div>
      </div>
      <div class="recommend-item-wrapper">
        <div class="recommend-item">1</div>
      </div>
      <div class="recommend-item-wrapper">
        <div class="recommend-item">1</div>
      </div> -->
      <!-- <div class="recommend-item">1</div>
      <div class="recommend-item">1</div>
      <div class="recommend-item">1</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.home-recommend-wrapper {
  width: 100%;
  height: 150px;
  padding: 15px 10px 20px 10px;
  border-bottom: 8px solid #eee;
}
.home-recommend {
  display: flex;
  justify-content: space-between;
}
.recommend-item-wrapper {
  flex: 1;

  /* padding:0 12.5%; */
}
.recommend-item {
  /* border-radius: 50%; */
  text-align: center;
  /* background-color: pink; */
}
.recommend-item img {
  margin-bottom: 6px;
  width: 85%;
  height: 80%;
  border-radius: 50%;
}
.recommend-item .title {
  text-align: center;
}
</style>

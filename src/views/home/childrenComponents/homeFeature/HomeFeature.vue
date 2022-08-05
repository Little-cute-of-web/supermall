<template>
  <div class="home-feature-wrapper">
    <div class="home-feature-title">本周流行</div>
    <a href="www.baidu.com" class="home-feature-container">
      <div class="home-feature-box" v-for="item in features" :key="item.id">
        <div class="home-feature-item">
          <img :src="item.image" alt="" />
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeFeature",
  data() {
    return {
      features: [
        {
          id: 1,
          image: require("@assets/img/feature/1.webp"),
          title: "万圣节必备",
        },
        {
          id: 2,
          image: require("@assets/img/feature/2.webp"),
          title: "万圣节必备",
        },
        {
          id: 3,
          image: require("@assets/img/feature/3.webp"),
          title: "万圣节必备",
        },
        {
          id: 4,
          image: require("@assets/img/feature/4.webp"),
          title: "万圣节必备",
        },
        {
          id: 5,
          image: require("@assets/img/feature/5.webp"),
          title: "万圣节必备",
        },
        {
          id: 6,
          image: require("@assets/img/feature/6.webp"),
          title: "万圣节必备",
        },
        {
          id: 7,
          image: require("@assets/img/feature/7.webp"),
          title: "万圣节必备",
        },
        {
          id: 8,
          image: require("@assets/img/feature/8.png"),
          title: "万圣节必备",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.home-feature-wrapper {
  padding: 10px;
}
.home-feature-title {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}
.home-feature-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
}
.home-feature-box {
  flex: 1;
  margin-bottom: 10px;
  /* padding: 5px; */
  /* display: flex;
  justify-content: space-between; */
}
.home-feature-item {
  /* flex: 1; */
  /* padding:5px; */
  text-align: center;
}
.home-feature-item img {
  width: 80px;
  height: 80px;
  /* background-color: pink; */
  border-radius: 50%;
}
</style>

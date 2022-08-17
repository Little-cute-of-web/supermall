import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/views/home/childrenComponents/swiper/swiper';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;//安装全局事件总线
  }
}).$mount('#app')

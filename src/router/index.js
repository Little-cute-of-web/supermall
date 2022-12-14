import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Profile = () => import('../views/profile/Profile.vue');
const Detail = () => import('../views/detail/Detail.vue')
const routes = [
  {
    path: '',
    redirect: '/home',
    component: Home
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/profile',
    component: Profile
  }, {
    // path: '/detail',
    path: '/detail/:iid', //动态路由传递参数
    component: Detail
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
})
export default router;
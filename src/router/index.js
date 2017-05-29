import Vue from 'vue';
import Router from 'vue-router';
import Categories from '@/components/categories';
import GoodDetail from '@/components/good-detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/categories',
      name: 'categories',
      component: Categories,
    },
    {
      path: '/good-detail',
      name: 'goodDetail',
      component: GoodDetail,
    },
  ],
});

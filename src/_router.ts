import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        { path: '', component: () => import('@/views/Index.vue') },
        { path: 'login', component: () => import('@/views/Login.vue') },
        { path: 'about', component: () => import('@/views/About.vue') },
        { path: 'home', component: () => import('@/views/Home.vue') }
      ]
    }
  ]
});

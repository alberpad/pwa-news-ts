import Vue from 'vue';
import Router, { Route } from 'vue-router';
import routes from './routes';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to: Route, from: Route, next: any) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  // @ts-ignore
  const isLogged = store.state.authModule.isLogged;
  if (!requiresAuth && isLogged && to.path === '/login') {
    return next('/news');
  }
  setTimeout(() => {
    if (requiresAuth && !isLogged) {
      next('/login');
    } else {
      next();
    }
  }, 200);
});

export default router;

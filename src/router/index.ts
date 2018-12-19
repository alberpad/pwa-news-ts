import Vue from 'vue';
import Router, { Route } from 'vue-router';
import routes from './routes';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to: Route, from: Route, next: any) => {
  // Estos controles de flujo también se pueden implentar en el hook mounted() de cada componente
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresOnline = to.matched.some((record) => record.meta.requiresOnline);
  // @ts-ignore
  const isLogged = store.state.authModule.isLogged;
  // @ts-ignore
  const isOnline = store.state.appModule.isOnline;
  if (!requiresAuth && isLogged && to.path === '/login') {
    return next('/news');
  }
  if (requiresOnline && !isOnline && to.path === '/register') {
    return next('/login');
  }
  setTimeout(() => {
    if (requiresAuth && !isLogged) {
      next('/login');
    } else {
      next();
    }
    // if (requiresOnline && !isOnline && to.path === '/register') {
    //   next('/login');
    // } else {
    //   next();
    // }
  }, 200);
});
// fin
export default router;

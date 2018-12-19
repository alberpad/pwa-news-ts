const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('@/views/Index.vue') },
      { path: 'login', component: () => import('@/views/Login.vue') },
      { path: 'register', component: () => import('@/views/Register.vue') },
      { path: 'news', component: () => import('@/views/News.vue'), meta: { requiresAuth: true } },
      {
        path: 'news/:id',
        name: 'news-detail',
        component: () => import('@/views/NewsDetail.vue'),
        meta: { requiresAuth: true }
      },
      { path: 'about', component: () => import('@/views/About.vue') },
      { path: 'home', component: () => import('@/views/Home.vue') }
    ]
  }
];

// Simpre dejar esto al final
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('@/views/Error404.vue'),
    children: []
  });
}

export default routes;

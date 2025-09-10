import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Board',
      component: () => import('@/views/BoardView.vue'),
    },
    {
      path: '/conn_error',
      name: 'ConnError',
      component: () => import('@/views/ErrorView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/ErrorView.vue'),
    },
  ],
})

export default router

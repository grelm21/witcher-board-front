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
      path: '/404',
      name: '404',
      component: () => import('@/views/404View.vue'),
    },
  ],
})

export default router

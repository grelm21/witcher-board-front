import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Board',
      component: () => import('@/views/BoardView.vue'),
    },
  ],
})

export default router

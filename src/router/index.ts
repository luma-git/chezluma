import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/liste-de-noel',
      name: 'christmasList',
      component: () => import('@/views/ChristmasListView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/blog',
      component: () => import('@/views/BlogView.vue'),
      beforeEnter() {
        window.location.href = 'https://blog.chezluma.fr/'
      }
    },
    {
      path: '/liste-de-noel',
      name: 'christmasList',
      component: () => import('@/views/ChristmasListView.vue')
    }
  ]
})

export default router

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
      path: '/mentions-legales',
      name: 'legal',
      component: () => import('@/views/LegalView.vue')
    },
    {
      path: '/blog',
      component: () => import('@/views/LinkView.vue'),
      beforeEnter() {
        window.location.href = 'https://blog.chezluma.fr/'
      }
    },
    {
      path: '/mastodon',
      component: () => import('@/views/LinkView.vue'),
      beforeEnter() {
        window.location.href = 'https://piaille.fr/@lumadon'
      }
    },
    /*{
      path: '/liste-de-noel',
      name: 'christmasList',
      component: () => import('@/views/ChristmasListView.vue')
    }*/
  ]
})

export default router

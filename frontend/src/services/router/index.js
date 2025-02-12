import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PageLayout from '@/layouts/pageLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PageLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/lotery-result',
          name: 'lotery',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/LoteryView.vue'),
        },
        {
          path: '/animalitos-result',
          name: 'animalitos',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/AnimalitosView.vue'),
        },
        {
          path: '/sport-result',
          name: 'sport',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/SportView.vue'),
        },
        {
          path: '/rifas-result',
          name: 'rifas',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/RifasView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/AboutView.vue'),
        },
      ]
    },
  ],
})

export default router

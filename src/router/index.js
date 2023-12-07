import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../page/HomePage.vue'
import PainterPage from '../page/PainterPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/painterPage',
      name: 'painterPage',
      component: PainterPage
    }
  ]
})

export default router

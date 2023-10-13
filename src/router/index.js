import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SignView from '../views/SignView.vue';
import NumerologyView from '../views/NumerologyView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: '/:sing',
      name: 'sign',
      component: SignView
    },
    {
      path: '/numerology/:id',
      name: 'numerology',
      component: NumerologyView
    },

  ]
})

export default router

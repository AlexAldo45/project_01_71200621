import { createRouter, createWebHistory } from 'vue-router'
import MakananView from '../views/MakananView.vue'
import MinumanView from '../views/MinumanView.vue'
import MenuUtama from '../views/MenuUtama.vue'

const routes = [
  {
    path: '/MakananView',
    name: 'MakananView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MakananView
  },
  {
    path: '/MinumanView',
    name: 'MinumanView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MinumanView
  },
  {
    path: '/MenuUtama',
    name: 'MenuUtama',
    component: MenuUtama
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

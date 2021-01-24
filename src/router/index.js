import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test02 from "@/components/Test02";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: "/Test02",
    name: "Test02",
    component: Test02
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

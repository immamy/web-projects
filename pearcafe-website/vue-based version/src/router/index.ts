import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StoreView from '../views/StoreView.vue'
import MenuView from '../views/MenuView.vue'
import NewsView from '../views/NewsView.vue'
import ServiceView from '../views/ServiceView.vue'
import BlogView from '../views/BlogView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/store',
    name: 'Store',
    component: StoreView
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuView
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView
  },
  {
    path: '/service',
    name: 'Service',
    component: ServiceView
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

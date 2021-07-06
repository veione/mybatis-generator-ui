import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import HomeLayout from '../layouts/HomeLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    redirect: '/ds',
    children: [
      {
        path: '/ds',
        name: 'ds',
        component: () => import('views/Datasource/index.vue')
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('views/Table/index.vue')
      },
      {
        path: '/template',
        name: 'template',
        component: () => import('views/Template/index.vue')
      },
      {
        path: '/conf',
        name: 'conf',
        component: () => import('views/Configure/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router

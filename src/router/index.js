import { createRouter, createWebHashHistory } from 'vue-router'

// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  // {
  //   path: '/a',
  //   name: 'homepage',
  //   component: () => import('../views/homepage')
  // }
  {
    path: '/',
    component: () => import('../layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router

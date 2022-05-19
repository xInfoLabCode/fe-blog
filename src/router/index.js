import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import codeRoutes from './code'
import markdownRoutes from './markdown'

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      component: () => import('@/pages/home')
    },
    {
      path: '/code',
      component: () => import('@/pages/code'),
      children: [
        ...codeRoutes
      ]
    },
    {
      path: '/markdown',
      component: () => import('@/pages/markdown'),
      children: [
        ...markdownRoutes
      ]
    }
  ]
})

export default router

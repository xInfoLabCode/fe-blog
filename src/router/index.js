import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

console.info('Route Config', routes)

const router = new Router({
  routes
})

export default router

import Vue from 'vue'
import App from './App.vue'

import router from './router'

import 'highlight.js/styles/vs.css'
import '@/asset/css/index.css' // 自定义css

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

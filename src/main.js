import Vue from 'vue'
import App from './App.vue'

import router from './router'

// css
import 'normalize.css'
// 动态animate
import wow from 'wowjs'
import 'wowjs/css/libs/animate.css'
// markdown css
import 'highlight.js/styles/monokai-sublime.css';
// 自定义css
import '@/asset/css/index.less'

Vue.config.productionTip = false
Vue.prototype.$wow = wow

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

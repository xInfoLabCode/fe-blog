import Vue from 'vue'
import App from './App.vue'

// css
import 'normalize.css'
// 动态animate
import wow from 'wowjs'
import 'wowjs/css/libs/animate.css'
// markdown css
import 'highlight.js/styles/monokai-sublime.css';
// 自定义css
import '@/asset/css/index.less'

import components from '@/components'
import router from './router'

Vue.use(components)

Vue.config.productionTip = false
Vue.prototype.$wow = wow

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

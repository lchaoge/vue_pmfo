import Vue from 'vue'
import App from './App.vue'


import router from './router';

import 'wowjs/css/libs/animate.css'
import wow from 'wowjs'
Vue.prototype.$wow = wow

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/theme/index.css'
import i18n from '@/i18n/index'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
  size: 'mini'
})


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  i18n,
}).$mount('#app')

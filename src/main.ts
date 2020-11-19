import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/util.css'

import echarts from 'echarts'
import xcharts from '@/lib/xcharts/index'
import themeFunc from '@/lib/xcharts/theme/index'
themeFunc(echarts)
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
Vue.use(xcharts)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

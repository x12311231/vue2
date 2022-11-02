import Vue from 'vue'
import App from './App.vue'
import {show1} from './mixin'
import plugin from './plugins'

Vue.config.productionTip = false

Vue.mixin(show1)
Vue.use(plugin)


new Vue({
  render: h => h(App),
}).$mount('#app')

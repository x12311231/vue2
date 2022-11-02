import Vue from 'vue'
import App from './App.vue'
import {show1} from './mixin'

Vue.config.productionTip = false

Vue.mixin(show1)


new Vue({
  render: h => h(App),
}).$mount('#app')

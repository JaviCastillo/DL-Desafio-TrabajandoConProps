import Vue from 'vue'
import Padre from './Padre.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Padre),
}).$mount('#app')

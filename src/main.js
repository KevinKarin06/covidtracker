import Vue from 'vue'
import App from './App.vue'
import BlockUI from 'vue-blockui'
 
Vue.use(BlockUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

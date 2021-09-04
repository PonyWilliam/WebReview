import Vue from 'vue'
import stroe from './store/store'
import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store:stroe
}).$mount('#app')

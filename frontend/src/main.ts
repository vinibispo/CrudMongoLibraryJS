import Vue from 'vue'
import App from './App.vue'
import store from './store'

store.commit('getBooks')

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

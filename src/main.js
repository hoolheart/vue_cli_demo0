import Vue from 'vue'
import Resource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.use(Resource)
Vue.http.options.emulateJSON = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

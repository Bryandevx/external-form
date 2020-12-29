import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'


Vue.use(Vuelidate)
Vue.config.productionTip = false

export const globalUser = new Vue({
  data: {
    userData: null
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

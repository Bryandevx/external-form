import Vue from 'vue'
import App from './App.vue'
import vuelidate from 'vuelidate'
import router from './router'

Vue.use(vuelidate)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

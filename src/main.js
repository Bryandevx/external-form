import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

export const globalUser = new Vue({
  data: {
    userData: null, // podrria lllevar un control global de los datos del usario si se hace ub Object Assign en el login
    userType: null, //determina si es un guest o un usuario que ya esta registrado
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

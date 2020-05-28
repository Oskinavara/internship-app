import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.config.productionTip = false

new Vue({
  store,
  router,

  render: function(h) {
    return h(App)
  }
}).$mount('#app')

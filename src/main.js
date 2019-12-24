import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { firestorePlugin } from 'vuefire'

Vue.use(Buefy)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

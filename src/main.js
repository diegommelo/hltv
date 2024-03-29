import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { firestorePlugin } from 'vuefire'
import VueLazyImageLoading from 'vue-lazy-image-loading'

Vue.use(Buefy)
Vue.use(firestorePlugin)
Vue.use(VueHead)
Vue.use(VueLazyImageLoading)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

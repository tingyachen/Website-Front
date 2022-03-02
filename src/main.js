import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios.js'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixin from './mixin.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faAngleRight, faAngleLeft, faRemove, faVolumeHigh, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCarousel from 'vue-carousel'
import VueTinder from 'vue-tinder'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import Vuetable from 'vuetable-2'

Vue.use(Vuetable)
Vue.component('ImgInputer', ImgInputer)
Vue.use(VueTinder)
Vue.use(VueCarousel)
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faHeart, faAngleRight, faAngleLeft, faRemove, faVolumeHigh, faArrowRightFromBracket)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)
Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

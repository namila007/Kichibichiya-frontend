// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import store from '@/store/store'
Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.cyan.darken4,
    secondary: colors.cyan.darken1,
    accent: colors.indigo.accent4,
    error: colors.red.accent4,
    warning: colors.yellow.base,
    info: colors.blue.darken4,
    success: colors.lightGreen.accent4
  }
})
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

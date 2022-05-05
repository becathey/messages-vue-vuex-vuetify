import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Messages from './components/Messages'
import NewMessage from './components/NewMessage'
import Message from './components/Message'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(vueRouter)

const routes = [
  {path: "/", component: Messages},
  {path: "/NewMessage", component: NewMessage},
  {path: "/Message/:id", component: Message}
]

const router = new vueRouter({routes, mode: 'history'})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

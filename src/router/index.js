
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/home/'
import Webview from '../pages/router/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Index
    },
    {
        name: 'router',
        path: '/router',
        component: Webview
    }
  ]
})

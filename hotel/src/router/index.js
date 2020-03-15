import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import keyWords  from '@/components/keyWords'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'keyWords',
      component: keyWords
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Auther from '@/views/auther'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/auther',
      name: 'auther',
      component: Auther
    }
  ]
})
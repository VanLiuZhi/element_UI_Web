import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Auther from '@/views/auther'
import ArticleDetails from '@/views/ArticleDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/article_details/:guid',
      name: 'ArticleDetails',
      component: ArticleDetails
    },
    {
      path: '/auther',
      name: 'auther',
      component: Auther
    }
  ]
})
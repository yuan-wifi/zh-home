import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import articlelist from '@/components/article/articlelist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/articlelist',
      name: 'articlelist',
      component: articlelist
    }
  ]
})

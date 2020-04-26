import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import BookStore from '../views/BookStore'
import BookKind from '../views/BookKind'
import BookRank from '../views/BookRank'
import User from '../views/User'
import Login from '../views/Login'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/book-store',
      component: BookStore
    },
    {
      path: '/book-kind',
      component: BookKind
    },
    {
      path: '/book-rank',
      component: BookRank
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/search-result',
      component: SearchResult
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router

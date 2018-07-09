import Login from '../components/Login.vue'
import Store from '../components/Store.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../auth'

Vue.use(VueRouter)

function requireAuth (to, from, next) {
    if (auth.loggedIn())
      next()
    else
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
  }
    
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/' },
      { path: '/store', component: Store, beforeEnter: requireAuth },
      { path: '/login', component: Login },
      { path: '/logout',
        beforeEnter (to, from, next) {
          auth.logout()
          next('/')
        }
      }
    ]
  })
import Vue from 'vue'
import Router from 'vue-router'
// import Lstorage from 'store'
import _import from './import'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  fallback: true,
  routes: [{
    path: '/',
    name: 'index',
    component: _import('iframe/index')
  }, {
    path: '/success',
    name: 'success',
    component: _import('success/index')
  }]
})

// router.beforeEach((to, from, next) => {
//   if (/(check|refer|forumList|setting)/.test(to.name) && Lstorage.get('USER_INFO') === undefined) {
//     router.push({
//       name: 'login'
//     })
//     return
//   }
//   if (/(impowerLogin|indexSdk|high|base|impower|success|resultSdk)/.test(to.name)) {
//     document.getElementsByTagName('body')[0].className = 'body'
//   } else {
//     document.getElementsByTagName('body')[0].setAttribute('class', '')
//   }
//   next()
// })

export default router

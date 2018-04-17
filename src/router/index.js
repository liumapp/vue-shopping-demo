/**
 * @file index.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 4/17/18
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [
  {
    path: '/list',
    meta: {
      title: '商品列表'
    },
    component: (resolve) => require(['./views/list.vue'], resolve)
  },
  {
    path: '/product/:id',
    meta: {
      title: '商品详情'
    },
    component: (resolve) => require(['./views/product.vue'], resolve)
  },
  {
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: (resolve) => require(['./views/cart.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/list'
  }
];

const RouterConfig = {
  mode: 'history',
  routes: routers
}

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router

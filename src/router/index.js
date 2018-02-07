import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/Homepage'
import Collection from '@/components/Collection'
import Product from '@/components/Product'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/collection',
      component: Collection,
      meta: {
        title: 'Collection - Le Shop',
        metaTags: [
          {
            name: 'Collection page',
            content: 'The collection page of Le Shop.'
          }
        ]
      }
    },
    {
      path: '/collection/:productId',
      component: Product,
      meta: {
        title: 'Product - Le Shop',
        metaTags: [
          {
            name: 'Product page',
            content: 'The product page of Le Shop.'
          }
        ]
      }
    },
    {
      path: '/contact',
      component: Contact,
      meta: {
        title: 'Contact Page - Le Shop',
        metaTags: [
          {
            name: 'Contact page',
            content: 'The contact page of Le Shop.'
          }
        ]
      }
    },
    {
      path: '/',
      component: Homepage,
      meta: {
        title: 'Home Page - Le Shop',
        metaTags: [
          {
            name: 'Welcome page',
            content: 'The home page of Le Shop.'
          }
        ]
      }
    }
  ]
})

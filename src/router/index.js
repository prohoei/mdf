import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Shop from '@/components/Shop'
import Error404 from '@/components/Error404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: {
        title: 'Home Page',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      meta: {
        title: 'Shop Page'
      }
    },
    { 
      path: '404',
      component: Error404
    },
    { 
      path: '*',
      redirect: '404'
    }
  ]
})

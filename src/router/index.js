import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout'
import NotFound from '@/layout/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Not found',
    component: NotFound
  },
  {
    path: '/',
    name: 'Index',
    component: DefaultLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Not found') {
    if (to.name === 'Index') {
      return next({ name: 'Home' })
    }
    return next()
  } else {
    return next()
  }
})

export default router

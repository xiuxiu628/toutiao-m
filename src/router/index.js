import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index.vue')
  },
  {
    path: '/',
    component: () => import('@/views/layout.vue'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

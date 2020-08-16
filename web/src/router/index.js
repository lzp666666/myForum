import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      requireAuth: true,  // 判断是否需要登录
    },
    component: () => import('@/views/user.vue'),
    children: [],
  },
  {
    path: '/publish',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
    name: 'publish',
    meta: {
      footShow: true, // true显示，false隐藏
      
    },
    component: () => import('@/views/home/publish.vue')
  },
  {
    path: '/publishVideo',
    name: 'publishVideo',
    meta: {
      footShow: true, // true显示，false隐藏
    },
    component: () => import('@/views/home/publishVideo.vue')
  },
  {
    path: '/find',
    name: 'find',
    component: () => import('@/views/find.vue')
  },
  {
    path: '/article/:id',
    name: 'article',
    meta: {
      footShow: true, // true显示，false隐藏
    },
    component: () => import('@/views/home/article.vue'),
    children: [],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

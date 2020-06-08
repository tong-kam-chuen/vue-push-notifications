import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      props: true,
      component: () => import(/* webpackChunkName: "details" */ '../components/Details.vue')
    },
    {
      path: '/post',
      name: 'post',
      props: true,
      component: () => import(/* webpackChunkName: "post" */ '../components/Post.vue')
    },
    {
      path: '/camera',
      name: 'camera',
      component: () => import(/* webpackChunkName: "camera" */ '../components/Camera.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router

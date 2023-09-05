// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "home" */ '@/views/RegisterForm.vue')
      },
      {
        path: '/code_verification',
        name: 'email',
        component: () => import(/* webpackChunkName: "home" */ '@/views/EmailForm.vue'),
      },
      {
        path: '/resetPassword',
        name: 'reset',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ResetPassword.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "home" */ '@/views/LoginForm.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/GameDetail.vue')
      },
      {
        path: '/play',
        name: 'play',
        component: () => import('@/views/GamePlay.vue')
      },
      {
        path: '/allGame',
        name: 'allGame',
        component: () => import('@/views/AllGame.vue')
      }
    ],
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

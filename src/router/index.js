// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Userdashboard from '@/components/Userdashboard.vue'
import Admindashboard from '@/components/Admindashboard.vue'
import Guestdashboard from '@/components/Guestdashboard.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Adduser from '@/components/Adduser.vue'
import Addblog from '@/components/Addblog.vue'
import CreateNewBlog from '@/components/CreateNewBlog'

const routes = [
  {
      path: '/login',
      name: 'Login',
      component: Login
  },
  {
    path: '/admindashboard',
    name: 'Admindashboard',
    component: Admindashboard
  },
  {
    path: '/userdashboard',
    name: 'Userdashboard',
    component: Userdashboard
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/adduser',
    name: 'Adduser',
    component: Adduser
  },
  {
    path: '/addblog',
    name: 'Addblog',
    component: Addblog
  },
  {
    path: '/',
    name: 'Guestdashboard',
    component: Guestdashboard
  },
  {
    path:'/createnewblog',
    name:'CreateNewBlog',
    component:CreateNewBlog
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

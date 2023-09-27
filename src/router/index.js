// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Userdashboard from '@/components/Userdashboard.vue'
import Admindashboard from '@/components/Admindashboard.vue'
import Guestdashboard from '@/components/Guestdashboard.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import ProductPage from '@/components/ProductPage'
import UserCart from '@/components/UserCart'
// import HeroSection from '@/components/HeroSection'

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
    path: '/',
    name: 'Guestdashboard',
    component: Guestdashboard
  },

  {
    path: '/productpage', // Use a dynamic parameter ":productId"
    name: 'ProductPage',
    component: ProductPage, // Create a component for the product page
  },
  {
    path: '/usercart',
    name: 'UserCart',
    component: UserCart,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

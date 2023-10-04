// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Userdashboard from '@/components/Userdashboard.vue'
import Admindashboard from '@/components/Admindashboard.vue'
import Guestdashboard from '@/components/Guestdashboard.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import ProductPage from '@/components/ProductPage.vue'
import UserCart from '@/components/UserCart.vue'
import AdminProductPage from '@/components/AdminProductPage.vue'
import WishlistPage from '@/components/WishlistPage.vue'
import BuyNow from '@/components/BuyNow.vue'
import UpdateForm from '@/layouts/UpdateForm.vue'
// import RelatedProductPage from '@/components/RealtedProductPage.vue'
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
  // {
  //   path: '/topsellingbooks',
  //   name: 'TopSellingBooks',
  //   component: TopSellingBooks
  // },

  {
    path: '/',
    name: 'Guestdashboard',
    component: Guestdashboard
  },

  {
    path: '/productpage/:id', 
    name: 'ProductPage',
    component: ProductPage, 
    props: true,
  },
  // {
  //   path: '/relatedproductpage/:id', 
  //   name: 'RelatedProductPage',
  //   component: RelatedProductPage, 
  //   props: true,
  // },
  {
    path: '/usercart',
    name: 'UserCart',
    component: UserCart,
  },
  {
    path: '/adminproductpage',
    name: 'AdminProductPage',
    component: AdminProductPage,
  }, 
  {
    path: '/wishlistpage/:id',
    name: 'WishlistPage',
    component: WishlistPage,
  }, 
  {
    path: '/buynow/:id',
    name: 'BuyNow',
    component: BuyNow,
  },   
  {
    path: '/updateform/:id',
    name: 'UpdateForm',
    component: UpdateForm,
  }, 
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

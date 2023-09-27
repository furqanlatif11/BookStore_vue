<template>
 
    <v-app-bar app color="deep-purple">

      <v-app-bar-nav-icon>
 
        <img
          src="src\assets\images\Untitled design.png"
          alt="Logo"
          max-height="48"
          max-width="160"
        />
      </v-app-bar-nav-icon>

   
      <v-spacer></v-spacer> 
      
      <div class="text-center">
   
  </div>
  <v-text-field
        label="Search"
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        class="rounded-pill custom-search-bar"></v-text-field>

      <v-spacer></v-spacer> 
      <router-link to="UserCart">
        <v-btn ><v-icon title="Cart" color="white">mdi-cart</v-icon></v-btn>
       </router-link>
      <v-btn ><v-icon title="Your Wishlist">mdi-shopping</v-icon></v-btn>
      <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn   color="white"
          v-bind="props"><v-icon title="Account">mdi-account</v-icon></v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

      <router-link to="Login"> <v-btn variant="outlined" color="warning">Log In</v-btn></router-link>
     <router-link to="Signup"> <v-btn variant="flat" color="warning">Sign Up</v-btn></router-link>
    </v-app-bar>
    


</template>




<script>
 import { ref } from 'vue';
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const router = useRouter();
export default {
  
  
  data() {
    return {
      drawer: false,
      menuOpen: false, 
      items: [
        { title: 'Manage Account' },
       
      ],
    };
  },
  methods: {
    logout() {

    },

  },





 props:
 {
   title: String,
 },
 methods: {
   toggleSidebar() {
    
   },
   async logout() {
  try {

    const response = await fetch('http://10.0.10.211:3300/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      console.error('HTTP error:', response.status);
      alert("Logout failed");
      return;
    }
    localStorage.removeItem("token");
    router.push({ path: '/login' });

  } catch (error) {
    console.error('Error:', error);
    alert("Logout failed");
  }
}

 },
 redirectTo(route) {

      this.$router.push({ name: route });
      this.menuOpen = false;
    },

};
 



</script>

<style scoped>

@media (max-width: 600px) {
  .toggle-icon {
    display: inline-block; 
  }
  .title {
    display: none; 
  }
  .logout-btn {
    font-size: 12px; 
  }
}
.navs {
  min-height: 0;
}

.custom-search-bar {

  @media (max-width: 600px) {
    display: none;
  }
}
div:hover .v-menu__content {
  display: block !important;
}
</style>

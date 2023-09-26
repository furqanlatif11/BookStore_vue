<template>
  <v-app>
    <v-app-bar app color="deep-purple">
      <!-- Logo on the left -->
      <v-app-bar-nav-icon>
        <!-- Replace with your custom logo using an <img> element -->
        <img
          src="assets\images\77912002c277839aff249d10fac499cc"
          alt="Logo"
          max-height="48"
          max-width="120"
        />
      </v-app-bar-nav-icon>

      <!-- Centered search bar -->
      <v-spacer></v-spacer> <!-- Add a spacer to push the search bar to the center -->
      
      <div class="text-center">
   
  </div><v-text-field
        label="Search"
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>

      <!-- Login and signup buttons on the right -->
      <v-btn ><v-icon>mdi-cart</v-icon></v-btn>
      <v-btn ><v-icon>mdi-account</v-icon></v-btn>

      <v-btn variant="outlined">Log In</v-btn>
      <v-btn variant="flat" color="warning">Sign Up</v-btn>
    </v-app-bar>
    
    <!-- Your main content here -->
    <v-main>
      <!-- Your page content goes here -->
    </v-main>
  </v-app>
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
     // You can implement the logic to toggle the sidebar here
   },
   async logout() {
  try {
    // Send a POST request to the logout API endpoint
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
 computed: {
    // Determine if the "Login" and "Signup" buttons should be shown
    showLoginSignupButtons() {
      // Replace 'guest' and 'user' with the appropriate route names
      return this.$route.name !== "Userdashboard" && this.$route.name !== "Admindashboard" && this.$route.name !=="CreateNewBlog";
    },
    showCreateButtons(){
      return this.$route.name !=="Admindashboard" && this.$route.name !=="Guestdashboard"
    }
  },
  data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
};
 



</script>

<style scoped>
/* Add any custom styles for your Navbar here */

/* Media query for screens smaller than 600px */
@media (max-width: 600px) {
  .toggle-icon {
    display: inline-block; /* Show the hamburger icon */
  }
  .title {
    display: none; /* Hide the title */
  }
  .logout-btn {
    font-size: 12px; /* Reduce the font size of the Logout button */
  }
}
.navs {
  min-height: 0;
}
</style>

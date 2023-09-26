<template>
    <v-app>
      <Navbar />
      <HeroSection />
      <v-container>
        <div class="text-center mt-10">
          <h1>Our Featured <scope class="text-deep-purple">Books</scope></h1>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>

        </div>
      </v-container>
    </v-app>
    <Sidebar />
  </template>
  
  <script>

  import Navbar from "@/layouts/Navbar.vue";
  import HeroSection from "@/layouts/HeroSection.vue";


  export default {
    components: {
    //  Sidebar,
      Navbar,
      HeroSection,
  
    },
  };
  </script>
  
  <style>
  
  
  </style>
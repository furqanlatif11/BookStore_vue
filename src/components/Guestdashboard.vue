<template>
    <v-app>
      <Navbar />
      <HeroSection />
    
    </v-app>
    <Sidebar />
  </template>
  
  <script>
  //  import Sidebar from '@/layouts/Sidebar.vue'
  import Navbar from "@/layouts/Navbar.vue";
  //import Sidebar from "@/layouts/Sidebar.vue";
  import Card from "@/layouts/Card.vue";
  import HeroSection from "@/layouts/HeroSection.vue"
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
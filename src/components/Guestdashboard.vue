<template>
  <v-app>
    <Navbar />
    <HeroSection />
    <v-container>
      <div class="text-center mt-10">
        <h1>Our Featured <scope class="text-deep-purple">Books</scope>
        </h1>
        <v-row class="mt-5">
          <v-col v-for="book in books" :key="book.id" cols="12" sm="6" md="4" lg="3">
            <v-card class="border rounded" elevation="2" @mouseenter="showOverlay = true"
              @mouseleave="showOverlay = false">
              <!-- Image -->
              <div class="card-image-container">
                <v-img :src="book.cover_image" alt="Book Cover" max-height="100%" max-width="100%"></v-img>
                <!-- Overlay with options -->
                <div class="overlay" v-if="showOverlay">
                  <!-- Product details -->
                  <router-link to="ProductPage">
                    <v-btn icon color="deep-purple">
                      <v-icon color="white" @click="productinfo">mdi-eye</v-icon>
                    </v-btn>
                  </router-link>
                  <!-- <v-btn icon @click="navigateToProductPage" color="deep-purple">
                    <v-icon color="white">mdi-eye</v-icon>
                  </v-btn> -->
                  <!-- Add to cart -->
                   <div class="text-center">
                    <v-btn icon @click="snackbar = true" color="deep-purple" >
                      <v-icon color="white">mdi-cart-plus</v-icon>
                    </v-btn>

                    <v-snackbar v-model="snackbar" :timeout="timeout" >
                      {{ text }}

                      <template v-slot:actions>
                        <v-btn color="blue" variant="text" @click="snackbar = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </template>
                    </v-snackbar>
                  </div>

                </div>
              </div>
              <v-divider></v-divider>
              <v-card-title class="title-text">{{ book.title }}</v-card-title>
              <v-card-text class="author-text">Author: {{ book.author }}</v-card-text>
              <v-card-text class="description-text">{{
                book.description
              }}</v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <div class="text-h6">Price: ${{ book.price }}</div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>

  </v-app>



</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import HeroSection from "@/layouts/HeroSection.vue";
import { RouterLink } from "vue-router";
import axios from 'axios';
import Footer from '@/layouts/Footer.vue';


export default {
  data() {
    return {
      showOverlay: false,
      snackbar: false,
      text: 'Item Added to Cart.',
      timeout: 2000,
      books: [],
    };
  },

  mounted() {
    this.getBooks();
  },
  methods: {
    navigateToProductPage() {
      this.$router.push({ name: 'ProductPage' });
    },
    addToCart() {
      // Implement logic to add the book to the cart when clicked
    },
    async getBooks() {

      try {

        const response = await axios.get('http://10.0.10.220:8080/api/book')
        this.books = response.data.books;
      } catch (error) {

        console.error('Error fetching books:', error)

      }

    },

  },
  async productinfo(){
    
  },

  components: {
    //  Sidebar,
    Navbar,
    HeroSection,
    Footer,
  },
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Style for overlay icons */
.overlay v-btn {
  margin: 0 10px;
}

/* Show overlay on hover */
.card-image-container:hover .overlay {
  opacity: 1;
}
</style>

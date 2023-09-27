<template>
  <v-app>
    <Navbar />
    <HeroSection />
    <v-container>
      <div class="text-center mt-10">
        <h1>Our Featured <scope class="text-deep-purple">Books</scope>
        </h1>
        <v-row class="mt-5">
          <v-col v-for="book in books" :key="book.id" cols="12" sm="12" md="3" lg="2">
            <v-card class="border rounded" elevation="2" @mouseenter="showOverlay = true"
              @mouseleave="showOverlay = false">
              <!-- Image -->
              <div class="card-image-container">
                <v-img :src="book.imageUrl" alt="Book Cover" max-height="100%" max-width="100%"></v-img>
                <!-- Overlay with options -->
                <div class="overlay" v-if="showOverlay">
                  <!-- Product details -->
                  <router-link to="ProductPage">
                    <v-btn icon color="deep-purple">
                      <v-icon color="white">mdi-eye</v-icon>
                    </v-btn>
                  </router-link>
                  <!-- <v-btn icon @click="navigateToProductPage" color="deep-purple">
                    <v-icon color="white">mdi-eye</v-icon>
                  </v-btn> -->
                  <!-- Add to cart -->
                  <router-link to="UserCart">
                    <v-btn icon @click="addToCart" color="deep-purple">
                      <v-icon color="white">mdi-cart-plus</v-icon>
                    </v-btn>
                  </router-link>
                </div>
              </div>
              <v-divider></v-divider>
              <v-card-title class="title-text">{{ book.title }}</v-card-title>
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
  <Sidebar />
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import HeroSection from "@/layouts/HeroSection.vue";
import { RouterLink } from "vue-router";


export default {
  data() {
    return {
      showOverlay: false,
      books: [
        {
          id: 1,
          title: "How to Tell Story",
          description:
            "This book is all about fiction stories. This book is all about fiction stories.This book is all about fiction stories.",
          price: 200,
          imageUrl:
            "src/assets/images/MOTH_HowTellStory_HC_bookshot_facing_1_480x480.webp",
        },
        {
          id: 2,
          title: "How to Tell Story",
          description: "This book is all about fiction stories.",
          price: 200,
          imageUrl: "src/assets/images/3.+The+Perfect+Story+angled.png",
        },
        {
          id: 3,
          title: "How to Tell Story",
          description:
            "This book is all about fiction stories. This book is all about fiction stories.",
          price: 200,
          imageUrl: "src/assets/images//book.png",
        },
        {
          id: 4,
          title: "How to Tell Story",
          description: "This book is all about fiction stories.",
          price: 200,
          imageUrl: "src/assets/images/book.png",
        },
        {
          id: 5,
          title: "How to Tell Story",
          description:
            "This book is all about fiction stories.This book is all about fiction stories.",
          price: 200,
          imageUrl:
            "src/assets/images/Book-Review-Stories-I-Must-Tell-The-Emotional-Life-Of-An-Actor-By-Kabir-Bedi-1.jpg",
        },
        {
          id: 6,
          title: "How to Tell Story",
          description: "This book is all about fiction stories.",
          price: 200,
          imageUrl:
            "src/assets/images/MOTH_HowTellStory_HC_bookshot_facing_1_480x480.webp",
        },
      ],
    };
  },
  methods: {
    navigateToProductPage() {
      this.$router.push({ name: 'ProductPage' });
    },
    addToCart() {
      // Implement logic to add the book to the cart when clicked
    },
  },
  components: {
    //  Sidebar,
    Navbar,
    HeroSection,
  },
};
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

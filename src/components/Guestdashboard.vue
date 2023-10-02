<template>
  <v-app>
    <Navbar />
    <HeroSection />
    <v-main>
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

                    <v-btn icon @click="navigateToBookDetails(book.id)" color="deep-purple">
                      <v-icon color="white">mdi-eye</v-icon>
                    </v-btn>
                    <!-- Add to cart -->
                    <div class="text-center">
                      <v-btn icon @click="snackbar = true" color="deep-purple">
                        <v-icon color="white">mdi-cart-plus</v-icon>
                      </v-btn>
                      <v-btn icon color="red" @click="openWishlistModal">
                        <v-icon color="white">mdi-heart</v-icon>
                      </v-btn>

                      <v-snackbar v-model="snackbar" :timeout="timeout">
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

        <!-- Bestselling Books -->
        <div class="mt-10">
          <h1 class="text-center">
            Our Bestselling <scope class="text-deep-purple">Books</scope>
          </h1>
        </div>
        <div id="card">
          <v-app id="inspire">
            <v-row>
              <v-col v-for="(best, index) in bestsellers" :key="index" cols="12" sm="6" md="4" lg="4">
                <v-card class="mx-auto rounded" max-width="344" color="" hover link href="">
                  <v-img :src="best.cover_image" height="200px"></v-img>
                  <v-card-title>{{ best.title }}</v-card-title>
                  <v-card-subtitle>{{ best.author }}</v-card-subtitle>
                  <div class="d-flex">
                    <div>
                      <v-card-text>Reviews</v-card-text>
                    </div>
                    <div class="text-orange">
                      <v-icon class="pt-6">mdi-star</v-icon>
                      <v-icon class="pt-6">mdi-star</v-icon>
                      <v-icon class="pt-6">mdi-star</v-icon>
                      <v-icon class="pt-6">mdi-star</v-icon>
                      <v-icon class="pt-6">mdi-star</v-icon>
                    </div>
                  </div>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="toggleDescription(index)">
                      <v-icon>{{
                        isDescriptionOpen[index]
                        ? "mdi-chevron-up"
                        : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="isDescriptionOpen[index]">
                      <v-divider></v-divider>
                      <v-card-text>
                        {{ best.description }}
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>

            <!-- ---------------------------------Modal Structure------------------------------------------------------------ -->
          </v-app>
        </div>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import HeroSection from "@/layouts/HeroSection.vue";
import axios from "axios";
import Footer from "@/layouts/Footer.vue";

export default {
  data() {
    return {
      showOverlay: false,
      snackbar: false,
      text: "Item Added to Cart.",
      timeout: 2000,
      books: [],
      bestsellers: [
        {
          title: "White Hand",
          author: "Kohn Lavery",
          description: "Description 1",
          cover_image:
            "src/assets/images/357-3577307_konn-lavery-s-featured-book-novel-hd-png.png",
        },
        {
          title: "Stories I Must Tell",
          author: "Kabir Bedi",
          description: "Description 2",
          cover_image:
            "src/assets/images/Book-Review-Stories-I-Must-Tell-The-Emotional-Life-Of-An-Actor-By-Kabir-Bedi-1.jpg",
        },
        {
          title: "Archie Roch",
          author: "Keemar Roch",
          description: "Description 3",
          cover_image: "src/assets/images/book.png",
        },
      ],
      isDescriptionOpen: new Array(3).fill(false), 
      show: false,
    };
  },
  components: {
    Navbar,
    HeroSection,
    Footer,
  },

  mounted() {
    this.getBooks();
  },

  methods: {
    navigateToBookDetails(bookId) {
      this.$router.push({ name: "ProductPage", params: { id: bookId } });
    },
    addtoWishlist(bookId) {
      this.$router.push({ name: "WishlistPage", params: { id: bookId } });
    },
    addToCart() { },
    async getBooks() {
      try {
        const response = await axios.get("http://10.0.10.220:8080/api/book");
        this.books = response.data.books;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async productinfo() {
  
    },
    toggleDescription(index) {
  
      this.isDescriptionOpen[index] = !this.isDescriptionOpen[index];
    },

    // -------------------------------------------WishList API---------------------------------------------------
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


.overlay v-btn {
  margin: 0 10px;
}


.card-image-container:hover .overlay {
  opacity: 1;
}

.mx-auto {
  margin: 20px;
  box-shadow: 9px 9px 9px rgba(128, 128, 128, 0.6);
}

.mx-auto:hover {
  box-shadow: 9px 9px 9px rgba(20, 20, 20, 0.6);
}
</style>

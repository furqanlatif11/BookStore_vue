<template>
  <v-app>
    <Navbar />
    <HeroSection />
    <v-main>
      <v-container>
         <!-- Bestselling Books -->
         <div class="mt-10 mb-0">
          <h1 class="text-center">
            Our Bestselling <scope class="text-blue">Books</scope>
          </h1>
        </div>
        <div id="card">
         
            <v-row no gutters>
              <v-col v-for="(best, index) in bestsellers" :key="index" cols="12" sm="6" md="4" lg="3">
                <v-card class="mx-auto rounded border" max-width="344" color="" hover link href="">
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

        </div>
        <div >
          <v-img src="src/assets/images/Stationery-Supplies-Homepage-Banner-.jpg" width="100%"></v-img>
        </div>

          <!-- Featured Books -->
        <div class="text-center ">
          <h1>Our Featured <scope class="text-blue">Books</scope>
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
                      <br>
                   

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
             
                  <v-btn class="ml-10" color="#1f1991" variant="flat"  @click="navigateToBuyNow(book.id)">
                        Buy Now
                      </v-btn>
                
                </v-card-actions>
               
                    
              </v-card>
            </v-col>
          </v-row>
        </div>
        <!-- -----------------------------------------------------Images------------------------------------------------------------- -->
        <div class="mt-10">   
        <v-row class="pt-10">
          <v-col  v-for="n in 1" cols="12" sm="12" md="6" lg="6">
            <v-img src="src/assets/images/Children-books-1600-1600-uai-720x720.jpg" class="image-container">

            </v-img>

          </v-col>
          
          <v-col cols="12" sm="23" md="6" lg="6">
            <v-img src="src/assets/images/Non-Fiction-Books-Banner-uai-720x360.jpg" class="image-container">
            </v-img>
            <v-img src="src/assets/images/urdu-books-1600-800-uai-720x360.jpg" class="image-container"></v-img>

          </v-col>
          

        </v-row>
        </div>


        <!-------------------------------------------- Books On Sale--------------------------------------------------- -->
        <!-- <div class="mt-10 mb-0">
          <h1 class="text-center">
            Our Bestselling <scope class="text-deep-purple">Books</scope>
          </h1>
        </div>
        <div id="card">
         
            <v-row no gutters>
              <v-col v-for="(best, index) in bestsellers" :key="index" cols="12" sm="6" md="4" lg="3">
                <v-card class="mx-auto rounded border" max-width="344" color="" hover link href="">
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

        </div> -->
       
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
    navigateToBuyNow(bookId){
      this.$router.push({ name: "BuyNow", params: { id: bookId } });
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
.image-container {
  overflow: hidden; /* Hide overflowing parts of the image */
  transition: transform 0.3s; /* Add a smooth transition effect */
}

.image-container:hover {
  transform: scale(1.1); /* Scale the image to 110% on hover (adjust the value as needed) */
}
</style>

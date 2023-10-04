
<template>
    <v-app>
      <Navbar />
      <v-main>
        <div class="buy-now-bg p-10">
          <h1 class="text-center pt-10  text-yellow">Book Details</h1>
         <div class="text-center">
          <v-icon class="text-yellow  pb-10">mdi-arrow-down</v-icon>
         </div>
  
      </div>
        <v-container>
          <div>
           
  
            <v-row class="mt-10">
              <v-col cols="12" sm="12" md="6" lg="6">
  
                <v-img :src="book.cover_image" alt="Book Cover" max-height="80%" max-width="90%">
  
                </v-img>
  
  
              </v-col>
              <v-col cols="12" sm="12" md="6" lg="6">
                <v-card elevation="5">
                  <v-card-title class="pt-10">
                    <h1>Title: {{ book.title }}</h1>
                  </v-card-title>
  
                  <v-card-title>Rating: {{ this.rating }}</v-card-title>
  
  
  
                  <div class="d-flex">
                    <v-card-title>Based on Reviews</v-card-title>
                    <div class="text-orange">
                      <v-icon class="pt-6">mdi-star</v-icon>
                      <v-icon class="pt-6">mdi-star</v-icon>
                      <v-icon class="pt-6">mdi-star</v-icon>
                      <v-icon class="pt-6">mdi-star</v-icon>
                      <v-icon class="pt-6 text-black">mdi-star</v-icon>
                    </div>
                  </div>
  
  
  
                  <v-card-title>
                    Price: ${{ book.price }}
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <p>Author: {{ book.author }}</p>
                    <p>ISBN: 9780141346090</p>
                    <p>Publisher: Penguin Books Limited</p>
                    <p>Publication_Date: Feb 23, 2015</p>
                    <p>Format: Paperback - 272 Pages</p>
                    <p>Language: English</p>
  
                  </v-card-text>
  
                  <div class="d-flex  w-75  mb-4">
                   
                    <v-btn class="ml-4 mt-3" color="#1f1991" variant="flat"  @click="navigateToBuyNow(book.id)">
                          Buy Now
                        </v-btn>
                  
           
                  </div>
  
  
  
                  <v-divider></v-divider>
                  <div>
                    <div>
                      <v-row>
                        <v-col v-for="n in 1" cols="12" sm="6" md="6" lg="4">
                          <h4 class="ml-4">SKU</h4>
  
  
                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="8">
                          <p class="ml-10">9780141346090</p>
                        </v-col>
                      </v-row>
  
  
                    </div>
                    <v-row>
                      <v-col v-for="n in 1" cols="12" sm="6" md="6" lg="4">
                        <h4 class="ml-4">Categories</h4>
                      </v-col>
                      <v-col cols="12" sm="6" md="6" lg="8">
                        <p class="ml-10">Novel</p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col v-for="n in 1" cols="12" sm="6" md="6" lg="4">
                        <h4 class="ml-4">Tags</h4>
                      </v-col>
                      <v-col cols="12" sm="6" md="6" lg="8">
                        <p class="ml-10">Penguin Books Limited</p>
                      </v-col>
                    </v-row>
                  </div>
                  <v-divider>
  
                  </v-divider>
                  <div class="ml-10 pt-5 ">
                    <h4>Share</h4>
                    <v-icon color="navy-blue">mdi-facebook</v-icon>
                    <v-icon class="pl-7" color="blue">mdi-twitter</v-icon>
                    <v-icon class="pl-10" color="red">mdi-pinterest</v-icon>
  
                  </div>
                </v-card>
  
              </v-col>
  
            </v-row>
          </div>
          <div>
            <h1>
              Reviews
            </h1>
  
            <ul v-for="rev in reviews">
              <li>{{ rev.text }}</li>
  
            </ul>
  
          </div>
          <!-- ------------------------------------Related Books---------------------------------------------------------------- -->
          <div class="text-center mt-10">
            <h1>Related Books</h1>
            <v-row class="mt-5">
              <v-col v-for="relatedBook in related_books" :key="relatedBook.book_id" cols="12" sm="6" md="4" lg="3">
                <v-card class="border rounded" elevation="2">
  
                  <div class="card-image-container">
                    <v-img :src="relatedBook" alt="Related Book Cover" max-height="100%" max-width="100%"></v-img>
  
                    <div class="overlay">
  
                      <v-btn icon @click="navigateToBookDetails(book.id)" color="deep-purple">
                        <v-icon color="white">mdi-eye</v-icon>
                      </v-btn>
  
                      <div class="text-center">
                        <v-btn icon @click="addToCart(relatedBook)" color="deep-purple">
                          <v-icon color="white">mdi-cart-plus</v-icon>
                        </v-btn>
                        <v-btn icon color="red" @click="addToWishlist(relatedBook)">
                          <v-icon color="white">mdi-heart</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  <v-divider></v-divider>
                  <!-- <v-card-title class="title-text">Title: {{ relatedBook }}</v-card-title> -->
                  <v-card-text>Author: {{ book.author }}</v-card-text>
  
                  <v-divider></v-divider>
                  <v-card-title>
                    Price: ${{ book.price }}
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-main>
      <Footer />
    </v-app>
  </template>
    
  <script>
  import axios from 'axios';
  import Navbar from '@/layouts/Navbar.vue';
  import Footer from '@/layouts/Footer.vue';
  export default {
    data() {
      return {
        rating: '',
        bookdetails: '',
        book: [],
        reviews: [],
        related_books: [{
  
          author: " Hover"
        },
        ],
        imageStyle: {
          transform: 'scale(1)', // Initial scale
          transition: 'transform 0.2s', // Transition for smooth zoom
        },
      };
    },
    components: {
      Navbar,
      Footer
    },
    async created() {
  
      const bookId = this.$route.params.id;
  
  
      // ------------------------------API TO Desiplay Speific Product---------------------------------------
  
      try {
        const response = await axios.get(`http://10.0.10.220:8080/api/book/${bookId}`);
        this.book = response.data.book;

      } catch (error) {
        console.error('Error fetching book details:', error);
      }
  
      // ----------------------------------------Realted Image API----------------------------------------------------------------
      try {
        const response1 = await axios.get(`http://10.0.10.220:8080/api/bookdetail/${bookId}`);
        this.reviews = response1.data.details.reviews
  
     
        this.rating = response1.data.details.rating;
        this.reviews = response1.data.details.reviews;
  
       
        this.related_books = response1.data.details.related_books;

  
  
  
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    },
    methods: {
      navigateToBuyNow(bookId){
        this.$router.push({ name: "BuyNow", params: { id: bookId } });
      },
    },
  
  
  
  };
  </script>
    
  <style scoped>
  .description-text {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  
    text-overflow: ellipsis;
    max-height: 3em;
  }
  
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
  .buy-now-bg{
    padding:20px
  }
  </style>
    
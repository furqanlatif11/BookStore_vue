
<template>
  <v-app>
    <v-main>
      <v-container>
        <div>
          <h1 class="mt-10">Book Details</h1>
          <v-row class="mt-10">
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-card elevation="5">
                <v-card-title class="pt-10">
                  Title: {{ book.title }}
                </v-card-title>
                <v-card-text>Author: {{ book.author }}</v-card-text>
                <v-card-text class="description-text">
                  Description: {{ book.description }}
                </v-card-text>
                <v-divider></v-divider>
                <v-card-title>
                  Price: ${{ book.price }}
                </v-card-title>
              </v-card>

            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-img :src="book.cover_image" alt="Book Cover" max-height="75%" max-width="75%">

              </v-img>

            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: [],
    };
  },
  async created() {

    const bookId = this.$route.params.id;


    try {
      const response = await axios.get(`http://10.0.10.220:8080/api/book/${bookId}`);
      console.log('API Response:', response);
      this.book = response.data.book;
      console.log('Book Details:', this.book);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
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
</style>
  
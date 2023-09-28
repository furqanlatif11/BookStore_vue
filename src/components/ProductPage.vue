<template>
 <v-app>
    <Navbar />

    <v-container class="mt-10">
           <h1 >How To tell Story</h1>
           <v-card-title class="title-text">{{ book.title }}</v-card-title>
           <v-card-text class="author-text">Author: {{ book.author }}</v-card-text>
              <v-card-text class="description-text">{{
                book.description
              }}</v-card-text>
              <v-divider></v-divider>
             
                <div class="text-h6">Price: ${{ book.price }}</div>
             
       </v-container>
   
 </v-app>
 
  
</template>

<script>



import Navbar from "@/layouts/Navbar.vue";

export default {
    components:{
        Navbar,
    },
    data(){
        return{
            books: []
        }
    }

}
    

</script>
<!-- <template>
    <div>
      <img :src="product.imageUrl" alt="Product Image" />
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
 
    </div>
  </template>




  <script>
  export default {
    data() {
      return {
        product: {}, // Initialize an empty product object
      };
    },
    
        created() {
  // Fetch product data based on the productId from the route params
  const productId = this.$route.params.productId;

  // Access product details from locally stored data (e.g., your books array)
  // Example:
  this.product = this.books.find((book) => book.id === productId);

  // If the product with the specified ID is found, "this.product" will contain its details
}
};


  </script>
   -->
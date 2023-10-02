<template>
    <v-app>
        <!-- <Navbar /> -->
        <v-main>
            <v-container>
                <div class="mt-10">
                    <h1 class="text-deep-purple border rounded pl-5 p-5">
                        Admin Products Page
                    </h1>
                    <h1 class="text-center text-deep-purple mt-10">Products You Added</h1>
                    <div class="text-right">
                        <v-btn @click="openModal" color="deep-purple"><v-icon>mdi-plus</v-icon>Add Product </v-btn>
                    </div>
                    <v-row class="mt-5">
                        <v-col v-for="book in books" :key="book.id" cols="12" sm="6" md="4" lg="3">
                            <v-card class="border rounded" elevation="2" @mouseenter="showOverlay = true"
                                @mouseleave="showOverlay = false">
                                <!-- Image -->
                                <div class="card-image-container">
                                    <v-img :src="book.cover_image" alt="Book Cover" max-height="100%"
                                        max-width="100%"></v-img>
                                    <!-- Overlay with options -->
                                    <div class="overlay" v-if="showOverlay">
                                        <!-- Product details -->

                                        <v-btn icon color="red"  @click="deleteProduct(book.id)">
                                            <v-icon color="white">mdi-delete</v-icon>
                                        </v-btn>

                                        <div class="text-center">
                                            <v-btn icon @click="addToCart(book)" color="deep-purple">
                                                <v-icon color="white">mdi-pencil</v-icon>
                                            </v-btn>

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
                <v-dialog v-model="modal" max-width="500">
    <v-card>
      <v-card-title>Add a New Product</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="newProduct.title" label="Title"></v-text-field>
          <v-text-field v-model="newProduct.author" label="Author"></v-text-field>
          <v-textarea v-model="newProduct.description" label="Description"></v-textarea>
          <v-text-field v-model="newProduct.price" label="Price"></v-text-field>
          <v-text-field v-model="newProduct.imageUrl" label="File input"></v-text-field>
          <v-btn color="primary" @click="addProduct">Add Product</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
                <v-row>
                    <v-col v-for="product in products" :key="product.id" cols="12" sm="12" md="3" lg="2">
                        <v-card>
                            <v-img :src="product.imageUrl" alt="Product Image" height="200"></v-img>
                            <v-card-title>{{ product.title }}</v-card-title>
                            <v-card-text>{{ product.description }}</v-card-text>
                            <v-card-actions>
                                <div class="text-h6">Price: ${{ product.price }}</div>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import axios from "axios";

export default {
    components: {
        //   Navbar,
    },
    data() {
        return {
            books: [],
      modal: false,
      showOverlay: false,
      snackbar: false,
      text: "Item Added to Cart.",
      timeout: 2000,
      newProduct: {
        cover_image: "",
        title: "",
        description: "",
        price: 0,
        author: ""
      },
      products: []
    };
    },
    mounted() {
        this.getBooks();
    },
    methods: {
    // -----------------------------------Get Books API--------------------------------------------------------------------------------

        async getBooks() {
      try {
        const response = await axios.get("http://10.0.10.220:8080/api/book");
        this.books = response.data.books;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    addToCart(book) {
      // Implement logic to add the book to the cart when clicked
      console.log("Added to cart:", book);
    },
    openModal() {
      this.modal = true;
    },



    // -----------------------------------Add Product API--------------------------------------------------------------------------------
    async addProduct() {
      try {
        const modalData = {
          title: this.newProduct.title,
          author: this.newProduct.author,
          description: this.newProduct.description,
          cover_image: this.newProduct.imageUrl, // Assuming imageUrl is the cover image
          price: this.newProduct.price,
        };

        const accessToken = JSON.parse(localStorage.getItem('user_info')).token; // Get the access token from localStorage

        const response = await axios.post('http://10.0.10.220:8080/api/addbook', modalData, {
          headers: {
            'Authorization': `Bearer ${accessToken}` // Add the authorization header with the token
          }
        });

        // Check if the API response indicates success
        if (response.status === 200 && response.data.message === "Book Added Successfully") {
          // If successful, add the new product to your products array or update your product list
          this.products.push({
            id: this.products.length + 1,
            imageUrl: this.newProduct.imageUrl,
            title: this.newProduct.title,
            description: this.newProduct.description,
            price: this.newProduct.price,
            author: this.newProduct.author,
          });

          // Clear the form and close the modal
          this.newProduct.imageUrl = "";
          this.newProduct.title = "";
          this.newProduct.description = "";
          this.newProduct.price = 0;
          this.newProduct.author = "";
          this.modal = false;

          // Show a success message or handle it as needed
          this.snackbar = true;
          this.text = "Product added successfully!";
          this.$router.go();
        } else {
          // Handle errors or show an error message
          console.error('Error adding product:', response);
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },

    // -----------------------------------Delete Product API--------------------------------------------------------------------------------

    async deleteProduct(productId) {
      try {
        // Get the access token from localStorage
        const accessToken = JSON.parse(localStorage.getItem('user_info')).token;

        // Make a DELETE request to your API to delete the product by its ID
        const response = await axios.delete(`http://10.0.10.220:8080/api/book/${productId}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}` // Add the authorization header with the token
          }
        });

        // Check if the API response indicates success
        if (response.status === 200 && response.data.message === "Product Deleted Successfully") {
          // Remove the deleted product from the products array
          this.products = this.products.filter(product => product.id !== productId);

          // Show a success message or handle it as needed
          this.snackbar = true;
          this.text = "Product deleted successfully!";
          this.$router.go();
        } else {
          // Handle errors or show an error message
          console.error('Error deleting product:', response);
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
},
  };





   


</script>

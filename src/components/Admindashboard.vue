<template>
    <v-app>
     

    
        <div class="d-flex justify-center">
         
  
          <v-app-bar app color="deep-purple text-center">
            <v-app-title >Admin Dashboard</v-app-title>
            <v-spacer></v-spacer>

            <v-btn text @click="loadUsers('home')">Home</v-btn>
            <v-btn text @click="loadUsers('user')">Users</v-btn>
            <v-btn text @click="loadUsers('order')">Orders</v-btn>
            <v-btn text @click="loadUsers('products')">Products</v-btn>
          </v-app-bar>

        </div>
        <v-container>
            <v-main>
                <div v-if="homea" class="mt-10">
                    
            <h1 class=" text-deep-purple border rounded pl-5 p-5">Admin Home</h1>

                    <h1 class="text-center text-deep-purple mt-10">Recently Added Products</h1>

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
                                            <v-btn icon @click="snackbar = true" color="deep-purple">
                                                <v-icon color="white">mdi-cart-plus</v-icon>
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
                                <v-card-text class="description-text">{{ book.description }}</v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <div class="text-h6">Price: ${{ book.price }}</div>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <!-- -----------------------------------------------------Users Page-------------------------------------------------------------- -->

                <div v-if="usera">
                    <h1 class="text-deep-purple mb-10">User Information</h1>
                    <UserTable />
                </div>
                <!-- -----------------------------------------------------Orders Page-------------------------------------------------------------- -->

                <div v-if="ordera">
                    <h1 class="text-deep-purple mb-10">Orders Information</h1>
                    <OrderTable />
                </div>

                <!-- -----------------------------------------------------Products Page-------------------------------------------------------------- -->

                <div v-if="productsa">
                    <AdminProductpage />

                </div>

                <!------------------------------------- Modal Structure------------------------------------------------------------------ -->
                <v-dialog v-model="modal" max-width="500">
                    <v-card>
                        <v-card-title>Add a New Product</v-card-title>
                        <v-card-text>
                            <v-form @submit.prevent="addProduct">
                                <v-text-field v-model="newProduct.title" label="Title"></v-text-field>
                                <v-textarea v-model="newProduct.description" label="Description"></v-textarea>
                                <v-text-field v-model="newProduct.price" label="Price"></v-text-field>
                                <v-file-input v-model="newProduct.imageUrl" label="File input"></v-file-input>
                                <v-btn type="submit" color="primary">Add Product</v-btn>
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
            </v-main>
        </v-container>
    </v-app>
</template>

<script>
import UserTable from "@/components/UserTable.vue";
import OrderTable from "@/components/OrderTable.vue";
import AdminProductpage from "@/components/AdminProductPage.vue"
import axios from 'axios';
export default {
    components: {
        UserTable,
        OrderTable,
        AdminProductpage,
    },
    data() {
        return {
            homea: true,
            usera: false,
            ordera: false,
            productsa: false,
            modal: false,
            newProduct: {
                imageUrl: "",
                title: "",
                description: "",
                price: 0,
            },
            products: [],

            books: [],
        };
    },
    mounted() {
        this.getBooks();
    },
    methods: {

        loadUsers(name) {
            if (name === "home") {
                this.usera = false;
                this.homea = true;
                this.ordera = false;
                this.productsa = false;
            }
            if (name === "user") {
                this.usera = true;
                this.homea = false;
                this.ordera = false;
                this.productsa = false;
            } else if (name === "order") {
                this.usera = false;
                this.homea = false;
                this.ordera = true;
                this.productsa = false;
            } else if (name === "products") {
                this.usera = false;
                this.homea = false;
                this.ordera = false;
                this.productsa = true;
            }
        },

        openModal() {
            this.modal = true;
        },
     
        async getBooks() {
            try {
                const response = await axios.get('http://10.0.10.220:8080/api/book');
                this.books = response.data.books;
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        },
    },
};
</script>

<!-- ---------------------------------------style-------------------------------------------------------------- -->

<style>
@media (max-width: 600px) {
    .toggle-icon {
        display: inline-block;
    }

    .title {
        display: none;
    }

    .logout-btn {
        font-size: 12px;
    }
}

.navs {
    min-height: 0;
}

.card-image-container {
    height: 200px;
    overflow: hidden;
}

.description-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em;
}

.title-text {
    white-space: normal;
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

/* Show overlay on hover */
.card-image-container:hover .overlay {
    opacity: 1;
}
</style>

<template>
    <v-app>
        <v-app-bar app color="deep-purple">
            <v-app-bar-nav-icon>
                <img src="src/assets/images/" alt="Logo" max-height="48" max-width="120" />
            </v-app-bar-nav-icon>

            <v-app-title class="ml-10"> Admin Dashboard </v-app-title>
            <v-spacer></v-spacer>

            <v-btn text class="ml-5" @Click="loadUsers('home')">Home</v-btn>
            <v-btn text class="ml-5" @Click="loadUsers('user')">Users</v-btn>
            <v-btn text @Click="loadUsers('order')">Orders</v-btn>
            <v-btn text @Click="loadUsers('products')">Products</v-btn>
        </v-app-bar>

        <v-container>
            <v-main>
                <div v-if="homea" class="mt-10">
                    <h1 class="text-center text-deep-purple">Recently Added Products</h1>

                    <v-row class="mt-5">
                        <v-col v-for="book in books" :key="book.id" cols="12" sm="12" md="3" lg="2">
                            <v-card class="border rounded" elevation="2">
                                <!-- Image -->
                                <div class="card-image-container">
                                    <v-img :src="book.imageUrl" alt="Book Cover" max-height="100%" max-width="100%"></v-img>
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
                    <h1 class="text-deep-purple">Products Information</h1>

                    <h1 class="text-center text-deep-purple mt-10">
                        Recently Added Products
                    </h1>
                    <div class="text-end">
                        <v-btn prepend-icon="mdi-plus" variant="tonal" color="deep-purple" @Click="openModal">
                            Add Product</v-btn>
                    </div>

                    <v-row class="mt-5">
                        <v-col v-for="book in books" :key="book.id" cols="12" sm="12" md="3" lg="2">
                            <v-card class="border rounded" elevation="2">
                                <!-- Image -->
                                <div class="card-image-container">
                                    <v-img :src="book.imageUrl" alt="Book Cover" max-height="100%" max-width="100%"></v-img>
                                </div>
                                <v-divider></v-divider>
                                <v-card-title class="title-text">{{ book.title }}</v-card-title>
                                <v-card-text class="description-text">{{
                                    book.description
                                }}</v-card-text>
                                <v-divider></v-divider>

                                <v-card-actions>
                                    <div class="text-h6 text-center">
                                        Price: ${{ book.price }}
                                    </div>
                                </v-card-actions>
                                <div class="text-center">
                                    <v-btn variant="flat" color="red"><v-icon>mdi-delete</v-icon>Delete</v-btn>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
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
export default {
    components: {
        UserTable,
        OrderTable,
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
        addProduct() {
            // Add the new product to the products array
            this.products.push({
                id: this.products.length + 1,
                imageUrl: this.newProduct.imageUrl,
                title: this.newProduct.title,
                description: this.newProduct.description,
                price: this.newProduct.price,
            });

            // Clear the form and close the modal
            this.newProduct.imageUrl = "";
            this.newProduct.title = "";
            this.newProduct.description = "";
            this.newProduct.price = 0;
            this.modal = false;
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
</style>

<template>
    <v-app>
        <Navbar />
        <v-main>
            <v-container>
                <h1> Checkout </h1>
                <v-divider></v-divider>

                <div>
                    <v-divider></v-divider>

                    <v-row class="mt-10">

                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-card class="d-flex">
                                <div>
                                    <v-img :src="book.cover_image" alt="Book Cover" height="100px" width="100px"> </v-img>
                                </div>

                                <div>
                                    <h2>Title: {{ book.title }}</h2>
                                    <p>Author: {{ book.author }}</p>

                                    <v-card-title>
                                        Price: ${{ book.price }}
                                    </v-card-title>
                                </div>

                            </v-card>
                            <v-divider></v-divider>

                            <!-- 
                                <div class="d-flex align-center w-50 ml-4">
                                    <v-text-field v-model="quantity" type="number" placeholder="1" min="1"
                                        :style="{ width: '25%' }"></v-text-field>
                                    <v-btn @click="addToCart" color="deep-purple" class="ml-10">Add to Cart</v-btn>
                                </div> -->



                            <v-divider></v-divider>

                            <v-divider>

                            </v-divider>



                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">




                        </v-col>


                    </v-row>
                </div>
                <CheckOutForm />

            </v-container>
        </v-main>
    </v-app>
</template>


<script>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';
import CheckOutForm from '@/layouts/CheckOutForm.vue'
import axios from 'axios';
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
        Footer,
        CheckOutForm 
    },
    async created() {

        const bookId = this.$route.params.id;


        // ------------------------------API TO Desiplay Speific Product---------------------------------------

        try {
            const response = await axios.get(`http://10.0.10.220:8080/api/book/${bookId}`);
            // console.log('API Response:', response);
            this.book = response.data.book;
            // console.log('Book Details:', this.book);
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    },
};
</script>
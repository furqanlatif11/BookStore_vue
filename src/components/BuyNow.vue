<template>
    <v-app>
        <Navbar />
        <v-main>
            <div class="buy-now-bg p-10">
                <h1 class="text-center pt-10  text-yellow">Checkout</h1>
                <div class="text-center">
                    <v-icon class="text-yellow  pb-10">mdi-arrow-down</v-icon>
                </div>
            </div>
            <v-container>
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
                                <v-text-field v-model="quantity" type="number" placeholder="" label="Quantity" min="0"
                                    :style="{ width: '75%' }"></v-text-field>



                            </div>
                        </v-card>

                        <CheckOutForm />
                    </v-col>


                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-card class="border rounded-lg w-75 summary-card ml-10">
                            <v-card-title>Summary</v-card-title>
                            <v-divider></v-divider>
                            <div class="d-flex  ">
                                <div>
                                    <v-card-text>Sub-Total</v-card-text>
                                </div>
                                <div class="justify-content-right ml-10">
                                    <v-card-title class="pl-8">
                                        ${{ book.price }}
                                    </v-card-title>

                                </div>

                            </div>
                            <div class="d-flex  ">
                                <div>
                                    <v-card-text>Quantity</v-card-text>
                                </div>
                                <div class="justify-content-right ml-10">
                                    <v-card-title class="pl-10">{{ quantity }}</v-card-title>

                                </div>

                            </div>
                            <v-divider></v-divider>
                            <div class="d-flex">
                                <div>
                                    <v-card-title>Total</v-card-title>
                                </div>
                                <div class="justify-content-right ml-10">
                                    <v-card-title class="pl-10">${{ totalPrice }}</v-card-title>

                                </div>

                            </div>



                        </v-card>
                        <v-btn variant="flat" color="#1f1991" class="ml-10 w-75 mt-5" @click="orderconfirm">
                            Proceed To Checkout
                        </v-btn>
                    </v-col>
                </v-row>



            </v-container>
        </v-main>
        <Footer />
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

            data: {},
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
            quantity: 1, // Initialize quantity to 1
            totalPrice: 0, // Initialize totalPrice
        };
    },
    watch: {
        quantity(newQuantity) {

            this.totalPrice = this.book.price * newQuantity;
        },
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

            this.book = response.data.book;

        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    },
    methods: {
        //  ----------------------------------------Confirm Order API-----------------------------------------------------
        async orderconfirm() {
            const accessToken = JSON.parse(localStorage.getItem('user_info')).token;
            const data = {
                book_id: [this.book.id],
                quantity: [this.quantity],
            };
            console.log("Data is :", data);
            try {

                const response = await axios.post(`http://10.0.10.220:8080/api/confirm`, data, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                alert("Your Order has been Placed, Thank You")
                this.$router.push('/')

                if (response.status === 200 && response.data.message === "Order confirmed successfully") {

                    console.log('Order confirmed successfully');

                } else {
                    console.error('Error confirming order:', response);

                }
            } catch (error) {
                console.error('Error confirming order:', error);

            }
        },
    }
};
</script>

<style>
.buy-now-bg {
    background-color: #1f1991;
}

.summary-card {
    background-color: #AEDBFC;
}
</style>
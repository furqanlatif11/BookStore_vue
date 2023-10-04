<template>
    <div>
        <div class="buy-now-bg p-10">
            <h1 class="text-center pt-10 text-yellow">Edit Book Details</h1>
            <div class="text-center">
                <v-icon class="text-yellow pb-10">mdi-arrow-down</v-icon>
            </div>
        </div>

        <v-container class="mt-10">
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <form class="mt-10">
                        <v-text-field v-model="book.title" label="Title"></v-text-field>
                        <v-text-field v-model="book.author" label="Author"></v-text-field>
                        <v-textarea v-model="book.description" label="Description"></v-textarea>
                        <v-text-field v-model="book.price" label="Price" type="number"></v-text-field>
                        <v-text-field v-model="book.cover_image" label="Image URL"></v-text-field>

                        <div class="form-group">
                            <v-btn type="button" color="primary" @click="updateBook">Update</v-btn>
                            <v-btn type="button" @click="clearForm">Clear Changes</v-btn>
                        </div>
                    </form>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-img :src="book.cover_image" alt="Book Cover" max-height="80%" max-width="90%"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            book: {
                title: '',
                author: '',
                description: '',
                price: '',
                cover_image: '',
            },
        };
    },
    methods: {
        async updateBook() {
            const accessToken = JSON.parse(localStorage.getItem('user_info')).token;
            const bookId = this.$route.params.id;
            try {
                const response = await axios.put(`http://10.0.10.220:8080/api/book/${bookId}`, this.book, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                   
                });
                alert("Book Updated Successfully")
 
                if (response.status === 200 && response.data.message === "Book Updated Successfully") {
                    
                    console.log('Book updated successfully');
                    this.$router.push('/admindashboard');

                } else {
                    console.error('Error updating book:', response);
                }
            } catch (error) {
                console.error('Error updating book:', error);
            }
        },
        clearForm() {
           
            this.book = {
                title: '',
                author: '',
                description: '',
                price: '',
                imageUrl: '',
            };
        },
    },
    async created() {
        const bookId = this.$route.params.id;
        try {
            const response = await axios.get(`http://10.0.10.220:8080/api/book/${bookId}`);
            if (response.status === 200) {
                this.book = response.data.book;
            } else {
                console.error('Error fetching book details:', response);
            }
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    },
};
</script>
  
<style>
/* Add any custom styles as needed */
</style>
  
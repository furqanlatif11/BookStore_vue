<template>
    <v-dialog v-model="modal" max-width="600px">
      <v-card>
        <v-card-title>Wishlist</v-card-title>
        <v-card elevation="5">
                <v-card-title class="pt-10">
                    Title: {{ book.title }}
                </v-card-title>
                <v-card-text>Author: {{ book.author }}</v-card-text>
                   
                    <v-divider></v-divider>
                    <v-card-title>
                        Price: ${{ book.price }}
                    </v-card-title>
            </v-card>
        <v-card-actions>
          <v-btn @click="closeModal">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      modalValue: Boolean,
    },
    data() {
      return {
        modal: false,
      };
    },
    watch: {
      modalValue: function (newValue) {
        this.modal = newValue;
      },
    },
    methods: {
      closeModal() {
        this.$emit("update:modalValue", false); // Emit event to close modal
      },
      
    },
  };
  </script>
  
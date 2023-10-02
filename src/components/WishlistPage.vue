<template>
    <v-dialog v-model="modal" max-width="600px">
        <v-card>
            <v-card-title>Wishlist</v-card-title>
            <v-card-text>

                <ul>
                    <li v-for="item in wishlistItems" :key="item.id">{{ item.title }}</li>
                </ul>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="modal = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script>
export default {
    props: {
        modalValue: Boolean,
        wishlistItems: Array,
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
};
</script>
  
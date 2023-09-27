<template>
    <v-app>
        <Navbar />

        <v-container class="mt-10">
            <div class="mt-10">
                <h1 class="text-deep-purple"><v-icon class="pr-10">mdi-cart</v-icon>Welcome to Your Cart!!</h1>
            </div>
            <h3 class="mt-10">Currently You Own This.</h3>

            <v-card v-for="n in 1" elevation="5" class="mt-4">
                <div class="d-flex align-items-start justify-content-space-around">
                    <div>
                        <v-btn icon class="remove-icon text-right">
                    <v-icon color="red">mdi-close</v-icon>
                </v-btn>
                    </div>
                    <div>
                        <v-img src="src/assets/images/MOTH_HowTellStory_HC_bookshot_facing_1_480x480.webp" width="200px"
                            height="200px" alt="Image Not Found"></v-img>
                    </div>

                    <div class="text-start">
                        <h1>How To Tell Story</h1>
                        <p>Description</p>
                        <h3 class="pt-8">Price: $240</h3>

                        <div class="quantity-control mt-3">
                        <v-btn icon class="me-4">
                            <v-icon color="deep-purple">mdi-chevron-up</v-icon>
                        </v-btn>
                        <span class="quantity" >1</span>
                        <v-btn icon class="ms-4">
                            <v-icon color="deep-purple">mdi-chevron-down</v-icon>
                        </v-btn>
                    </div>
                    </div>

                    <!-- Quantity control -->
                 
                </div>

                <!-- Cross icon for removal -->
                
            </v-card>

        </v-container>

    </v-app>
</template>



<script>
import Navbar from '@/layouts/Navbar.vue'
export default {
    components: {
        Navbar,
    }
};

</script>
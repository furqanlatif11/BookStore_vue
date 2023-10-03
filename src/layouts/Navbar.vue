<template>
  <v-app-bar app color="white">
    <v-container>
      <v-row>
      
        <v-col cols="6" class="pt-7">
        <v-img src="src/assets/images/Kitaab-Now-png-high-res-uai-1440x250.png" width="180px"></v-img>
        </v-col>

        <!-- Navigation Buttons and Icons on the Right -->
        <v-col cols="6" class="text-right pt-6">
          <!-- Cart Button -->
          <router-link to="UserCart">
            <v-btn icon>
              <v-icon title="Cart" color="#1f1991">mdi-cart</v-icon>
            </v-btn>
          </router-link>

          <!-- Wishlist Button -->
          <v-btn icon @click="openModal">
            <v-icon title="Your Wishlist" color="red">mdi-heart</v-icon>
          </v-btn>

          <!-- User Account Menu -->
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn color="" v-bind="props">
                <v-icon title="Account" color="">mdi-account</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- Log In Button -->
          <router-link to="Login">
            <v-btn variant="outlined" color="#1f1991">Log In</v-btn>
          </router-link>

          <!-- Sign Up Button -->
          <router-link to="Signup">
            <v-btn variant="flat" color="#1f1991" class="">Sign Up</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <wishlist-modal :modalValue="modal" @update:modalValue="modal = $event" />
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import WishlistModal from './WishlistModal.vue';
const email = ref("");
const password = ref("");
const router = useRouter();

export default {
  data() {
    return {
      drawer: false,
      menuOpen: false,
      modal: false,
      searchQuery: "",
      items: [{ title: 'Manage Account' }],
      // Other data properties...
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>

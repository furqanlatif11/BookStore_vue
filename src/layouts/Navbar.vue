<template>
  <v-app-bar app color="deep-purple">
    <v-app-bar-nav-icon>
      <img src="src/assets/images/Untitled design.png" alt="Logo" max-height="48" max-width="160" />
    </v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-text-field v-model="searchQuery" label="Search Books" @input="performSearch" outlined></v-text-field>

    <v-spacer></v-spacer>

    <router-link to="UserCart">
      <v-btn>
        <v-icon title="Cart" color="white">mdi-cart</v-icon>
      </v-btn>
    </router-link>

    <v-btn @click="openModal">
      <v-icon title="Your Wishlist">mdi-heart</v-icon>
    </v-btn>

    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="white" v-bind="props">
          <v-icon title="Account">mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <router-link to="Login">
      <v-btn variant="outlined" color="warning">Log In</v-btn>
    </router-link>

    <router-link to="Signup">
      <v-btn variant="flat" color="warning">Sign Up</v-btn>
    </router-link>
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

</style>

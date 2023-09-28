<template>
    <v-footer
      color="primary"
      padless
      app
    >
      <v-container>
        <!-- Contact Us -->
        <v-row>
          <v-col cols="12" md="4">
            <h3 class="white--text">Contact Us</h3>
            <p class="white--text">123 Example St, City</p>
            <p class="white--text">Email: contact@example.com</p>
            <p class="white--text">Phone: +123 456 789</p>
          </v-col>
  
          <!-- Newsletter -->
          <v-col cols="12" md="4">
            <h3 class="white--text">Newsletter</h3>
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              solo-inverted
            ></v-text-field>
            <v-btn
              @click="subscribeToNewsletter"
              color="white"
              outlined
            >
              Subscribe
            </v-btn>
          </v-col>
  
          <!-- Quick Links -->
          <v-col cols="12" md="4">
            <h3 class="white--text">Quick Links</h3>
            <ul class="list-unstyled white--text">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscribeToNewsletter() {
      // Add your newsletter subscription logic here
      console.log('Subscribed to newsletter:', this.email);
    },
  },
};
</script>
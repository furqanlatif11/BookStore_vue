<template>
  <v-divider color="yellow" class="custom-divider"></v-divider>
  <v-app>
    <v-footer color="#1B1D1F" padless app class="Footer">

      <v-container>

        <div color="#1B1D1F">
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
              <h1 class="text-yellow pt-2">Exclusive offers in your inbox</h1>

            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <div class="d-flex">
                <v-text-field v-model="email" label="Email" outlined solo-inverted></v-text-field>
                <v-btn color="white" outlined class="pt-5 pb-9" @click="subscribe">
                  Subscribe
                </v-btn>


              </div>
            </v-col>
          </v-row>

        </div>
        <v-divider class="custom-divider"></v-divider>

        <!-- Contact Us -->
        <v-row class="mt-5">
          <v-col cols="12" md="4">
            <h2 class="white--text ">Customer Service</h2>
            <p class="white--text mt-3">FAQs</p>
            <p class="white--text">Shipping & Returns</p>
            <p class="white--text">Exchange & Refund Policy</p>
            <p class="white--text">Payment Methods</p>
            <p class="white--text">Terms & Conditions</p>
            <p class="white--text">Privacy Poilcy</p>

          </v-col>

          <!-- Newsletter -->
          <v-col cols="12" md="4">
            <h2 class="white--text">Products & Services</h2>
            <p class="white--text mt-3">Books</p>
            <p class="white--text">Academic books</p>
            <p class="white--text">Office Supplies</p>
            <p class="white--text">Stationary Supplies</p>
            <p class="white--text">Prind & Bind</p>
            
          </v-col>

          <!-- Quick Links -->
          <v-col cols="12" md="4">
            <h2 class="white--text">Reach Us</h2>
            <p class="white--text mt-3"><v-icon class="mr-5 icon-size" color="blue">mdi-phone</v-icon>03222848222</p>
            <p class="white--text"><v-icon class="mr-5 icon-size" color="green">mdi-whatsapp</v-icon>03222848222</p>
            <p class="white--text"><v-icon class="mr-5 icon-size" color="red">mdi-mail</v-icon>support@kitaabnow.com</p>
            <p class="white--text mt-5">Monday – Friday (11:00 AM to 6:00 PM)</p>

            

            
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    async subscribe() {
      const accessToken = JSON.parse(localStorage.getItem('user_info')).token;
      try {
        const response = await axios.post("http://10.0.10.220:8080/api/subscribe",{},{
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        alert('You Are Successfully Subscribed to our Newsletter')
       console.log("Subscribed Successfully")
      } catch (error) {
        console.error("Error Subscribing:", error);
      }
   
  },
},
};


</script>
<style>
.quick-links li a {
  text-decoration: none;
  color: white;
}
.custom-divider {
  height: 10px; /* Adjust the thickness as needed */
  color: yellow; /* Set the desired color */
}
.icon-size{
  font-size:15px;
}
</style>
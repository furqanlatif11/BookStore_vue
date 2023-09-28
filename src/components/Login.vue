<template>
    <div class="pt-10">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field
          v-model="email"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?
          </a>
        </div>
  
        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          
        </v-card>
  
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="login"
        >
          Log In
        </v-btn>
  
        <router-link to="Signup">Sign up now <v-icon icon="mdi-chevron-right"></v-icon></router-link>
      </v-card>
    </div>
  </template>
  
  
  



<script>
import axios from 'axios';

export default {
  data: () => ({
    visible: false,
    email: "",
    password: "",
  }),

    methods: {
    async login() {
      let result = await axios.post("http://10.0.10.220:8080/api/login", {
        email: this.email,
        password: this.password
        
      });
      console.log(result.data);
      if (result.status == 200) {
       localStorage.setItem('user_info', JSON.stringify(result.data));
       if(this.email=="admin@gmail.com" && this.password=="12345678"){
        this.$route.push('/admindashboard')
       }
       else{
        this.$route.push('/')
        
       }

      } else {
        console.error("API Error:", response);
      }
    },
  },
};

</script>



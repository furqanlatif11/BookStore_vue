<template>
  <v-card class="mx-auto mt-10" style="max-width: 500px">
    <v-toolbar color="deep-purple-accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="text-h6 font-weight-regular"> Sign up </v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-form ref="form" v-model="isValid" class="pa-4 pt-6">
      <v-text-field
              v-model="username"
              variant="filled"
              color="deep-purple"
              label="Username"
              type="text"
              id="username"
      ></v-text-field>

      <v-text-field
              v-model="email"
              variant="filled"
              color="deep-purple"
              label="Email address"
              type="email"
              id="email"
      ></v-text-field>

      <v-text-field
              v-model="password"    
              variant="filled"
              color="deep-purple"
              counter="6"
              label="Password"
              style="min-height: 96px"
              type="password"
              id="password"
      ></v-text-field>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn variant="text" @click="reset"> Clear </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isValid"
        :loading="isLoading"
        color="deep-purple-accent-4"
        @click="signup"
      >
        Submit
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <router-link to="/login "
      >Login now <v-icon icon="mdi-chevron-right"></v-icon
    ></router-link>
  </v-card>
</template>

<script>

import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      isValid: false,
      isLoading: false,
    };
  },
  methods: {
    reset() {
      this.email = "";
      this.password = "";
    },
    async signup() {
      this.isLoading = true;
      try {
        const response = await fetch("http://10.0.10.211:3300/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.username,
            email: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) {
          console.error("HTTP error:", response.status);
          alert("User not found");
          this.isLoading = false;
          return;
        }

        const data = await response.json();
        localStorage.setItem("Signup", JSON.stringify(data));
        console.log(data);

        this.$router.push({ name: "Login" });

        // Clear form fields
        this.username = "";
        this.email = "";
        this.password = "";

        this.isLoading = false;

        // Handle the response data as needed
      } catch (error) {
        console.error("Error:", error);
        alert("User not found");
        this.isLoading = false;
      }
    },
  },
};




























// import { ref } from "vue";
// import { useRouter } from "vue-router";
// const username = ref("");
// const email = ref("");
// const password = ref("");
// const router = useRouter();
// export default {
//   methods: {
//     reset() {
//       this.email = "";
//       this.password = "";
//     },
//   },
//   const Signup = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch("http://10.0.10.211:3300/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: usernamename.value,
//         email: email.value,
//         password: password.value,
//       }),
//     });

//     if (!response.ok) {
//       // Handle non-2xx HTTP response status codes here
//       console.error("HTTP error:", response.status);
//       alert("User not found");
//       return;
//     }

//     const data = await response.json();
//     localStorage.setItem("Signup", JSON.stringify(data));
//     console.log(data);
//     router.push({ name: "Login" });
//     name.value = "";
//     email.value = "";
//     password.value = "";

//     // Handle the response data as needed
//   } catch (error) {
//     // Handle other types of errors, e.g., network issues
//     console.error("Error:", error);
//     alert("User not found");
//   }
// },

  //  async registerUser() {
  //   // Perform user registration and local storage storage here
  //    try {
  //      const response = await fetch("http://10.0.10.211:3300/api/register", {
  //        method: "POST",
  //      headers: { "Content-Type": "application/json" },
  //        body: JSON.stringify({
  //         name: this.username,
  //          email: this.email,
  //          password: this.password,
  //        }),
  //      });

  //      if (!response.ok) {
  //        console.error("HTTP error:", response.status);
  //        alert("Registration failed");
  //        return;
  //      }

  //      const userData = await response.json();

  //      // Store user data in local storage
  //      localStorage.setItem("userData", JSON.stringify(userData.user));

  //      // Optionally, you can clear the form fields
  //      this.username = "";
  //    this.email = "";
  //      this.password = "";

  //     // Redirect the user to the login page or perform any other action
  //     // router.push({ name: 'Login' }); // Uncomment this if you have Vue Router set up
  //  } catch (error) {
  //     console.error("Error:", error);
  //     alert("Registration failed");
  //   }
  //  },
//};

</script>

//
<script setup>
// import { ref } from "vue";
// import { useRouter } from "vue-router";
// const name = ref("");
// const email = ref("");
// const password = ref("");
// const router = useRouter();

// const Signup = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch("http://10.0.10.211:3300/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: name.value,
//         email: email.value,
//         password: password.value,
//       }),
//     });

//     if (!response.ok) {
//       // Handle non-2xx HTTP response status codes here
//       console.error("HTTP error:", response.status);
//       alert("User not found");
//       return;
//     }

//     const data = await response.json();
//     localStorage.setItem("Signup", JSON.stringify(data));
//     console.log(data);
//     router.push({ name: "Login" });
//     name.value = "";
//     email.value = "";
//     password.value = "";

//     // Handle the response data as needed
//   } catch (error) {
//     // Handle other types of errors, e.g., network issues
//     console.error("Error:", error);
//     alert("User not found");
//   }
//};

// const isValidEmail = (email) =>
// {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// };
</script>

<template>
  <v-card class="mx-auto mt-10" style="max-width: 500px">
    <v-card-title class="headline"> Sign Up </v-card-title>

    <v-card-text>
      <v-form @submit.prevent="signupForm">
        <v-text-field
          v-model="name"
          label="Name"
          :rules="nameRules"
          validate-on="blur"
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="Email"
          :rules="emailRules"
          validate-on="blur"
        ></v-text-field>

        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          :rules="passwordRules"
          validate-on="blur"
        ></v-text-field>

        <v-text-field
          label="Confirm Password"
          type="password"
          v-model="confirmpass"
          :rules="confirmPassRules"
          validate-on="blur"
        ></v-text-field>

        <v-btn
          type="submit"
          class="mt-3"
          :disabled="!isFormValid"
          color="indigo"
        >
          Submit
        </v-btn>

        <p class="mt-2">
          Already registered? <router-link to="/login">Click here to Login</router-link>
        </p>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "SignupForm",

  data: () => ({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
  }),

  computed: {
    nameRules() {
      return [
        (v) => !!v || "Name is required",

        (v) => v.length >= 4 || "Name must be at least 4 characters",
      ];
    },

    emailRules() {
      return [
        (v) => !!v || "Email is required",

        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
    },

    passwordRules() {
      return [
        (v) => !!v || "Password is required",

        (v) => v.length >= 8 || "Password must be at least 8 characters",
      ];
    },

    confirmPassRules() {
      return [
        (v) => !!v || "Please confirm your password",

        (v) => v === this.password || "Passwords do not match",
      ];
    },

    isFormValid() {
      return (
        this.nameRules.every((rule) => rule(this.name) === true) &&
        this.emailRules.every((rule) => rule(this.email) === true) &&
        this.passwordRules.every((rule) => rule(this.password) === true) &&
        this.confirmPassRules.every((rule) => rule(this.confirmpass) == true)
      );
    },
  },

  methods: {
    async signupForm() {
      let result = await axios.post("http://10.0.10.220:8080/api/register", {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirmpass,
      });

      if (result.status == 200) {
        this.$router.push("/login");
      } else {
        console.error("API Error:", response);
      }
    },
  },
};
</script>

<style scoped>
.v-card {
  margin: auto;
  margin-top: 10vh;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.v-card-title {
  text-align: center;
}

/* Center-align the form fields within the card */
.v-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Add spacing between form fields */
.v-text-field {
  margin-bottom: 16px;
  width: 100%; /* Ensure each input field takes the full width */
}
</style>

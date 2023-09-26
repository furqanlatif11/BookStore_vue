<template>
    <div>
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
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, your account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text>
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
  
        <router-link to="/">Sign up now <v-icon icon="mdi-chevron-right"></v-icon></router-link>
      </v-card>
    </div>
  </template>
  
  
  



<script>

export default {
  data: () => ({
    visible: false,
    email: "",
    password: "",
  }),
  name: "Login",
  methods: {
    async login() {
      try {
        const response = await fetch("http://10.0.10.211:3300/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        if (!response.ok) {
          console.error("HTTP error:", response.status);
          alert("Login failed");
          return;
        }

        const data = await response.json();
        localStorage.setItem("access_token", JSON.stringify(data.access_token));
        localStorage.setItem("userid", JSON.stringify(data.user_id));
        console.log(data);

        if (this.email == "admin@gmail.com" && this.password=="admin@123") {
          this.$router.push({ name: "Admindashboard" });
        } else {
          this.$router.push({ name: "Userdashboard" });
        }

        this.email = "";
        this.password = "";
      } catch (error) {
        console.error("Error:", error);
        alert("Login failed");
      }
    },
  },
};
</script>



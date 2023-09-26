<template>
    <v-app>
        <Navbar title="Admin Dashboard"/>
    </v-app>
    <Sidebar user="All Users" blog="All Blogs" info="Personal Info"  :useroption="true" adduser="Add User" :blogoption="false"/>
   <div class="position ">
    <v-container fluid >
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <center><v-card-title class="headline">Add User</v-card-title></center>
            <v-card-text>
              <v-form @submit.prevent="addUser">
                <v-text-field v-model="username" label="Username" required outlined clearable></v-text-field>
                <v-text-field v-model="email" label="Email" required outlined clearable type="email"></v-text-field>
                <v-text-field v-model="password" label="Password" required outlined clearable type="password"></v-text-field>
                <v-container fluid>
                    <v-btn color="primary" type="submit">Add User</v-btn>
                    <v-btn class="mx-2" color="primary" text @click="showAllUsers">Show All Users</v-btn>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
   </div>
  </template>
  
  <script>
    import Sidebar from '@/layouts/Sidebar.vue'
    import Navbar from '@/layouts/Navbar.vue'
    import Card from '@/layouts/Card.vue'
  export default {
    components:
        {
            Sidebar,
            Navbar,
            Card
        },
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      addUser() {
        // Add your logic to submit the user data to your backend or perform other actions here
        console.log('User added:', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        // Clear the form after submission
        this.username = '';
        this.email = '';
        this.password = '';
      },
    },
  };
  </script>

  <script setup>

  const showAllUsers=()=>
  {

  }

</script>
  <style>
.position{
    margin-top: 140px;
}
.v-application__wrap
{
    min-height: 0dvh;
}

</style>
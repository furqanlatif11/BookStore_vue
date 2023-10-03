<template>
    <h1>Enter Details</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
            lg="6"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
              hide-details
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              hide-details
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hide-details
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Shipping Address"
              hide-details
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Billing  Address"
              hide-details
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Phone Number"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>


  <script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script>

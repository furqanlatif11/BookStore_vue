<template>
  <v-table density="compact" elevation="5">
    <thead>
      <tr>
        <th class="text-left">User ID</th>
        <th class="text-left">User Name</th>
        <th class="text-left">Email</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in info.data" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <v-btn color="red" @click="deleteuser(item)"><v-icon>mdi-delete</v-icon> Delete</v-btn>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await axios.get('http://10.0.10.220:8080/api/users', {
          headers: {
            'Authorization': 'Bearer 110|CPALj2mDX3c6S03Iyc1oWVU6tpIVTzgusbsuQJcN64cae692'
          }
        });
        this.info = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async deleteuser(item){
     
      try {
        // Get the access token from localStorage
        const accessToken = JSON.parse(localStorage.getItem('user_info')).token;

        // Make a DELETE request to your API to delete the product by its ID
        const response = await axios.delete(`http://10.0.10.220:8080/api/users/${item.id}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}` // Add the authorization header with the token
          }
         
        });
        alert("User Deleted Successfully")
        this.$router.go();
    }catch(error){

    }
  //  async deleteuser(userId) {
  //   const userId = this.$route.params.id;
  //     try {
  
  //       const accessToken = JSON.parse(localStorage.getItem('user_info')).token;

     
  //       const response = await axios.delete(`http://10.0.10.220:8080/api/book/${userId}`, {
  //         headers: {
  //           'Authorization': `Bearer ${accessToken}` 
  //         }
  //       });

  //       if (response.status === 200 && response.data.message === "User Deleted Successfully") {
  //         // Remove the deleted product from the products array
  //         this.user = this.products.filter(product => product.id !== productId);

  //         // Show a success message or handle it as needed
  //         this.snackbar = true;
  //         this.text = "User deleted successfully!";
  //         this.$router.go();
  //       } else {
  //         // Handle errors or show an error message
  //         alert('Error deleting user:', response);
  //       }
  //     } catch (error) {
  //       console.error('Error deleting user:', error);
  //     }
  //   },
   
  }

  },
};


</script>

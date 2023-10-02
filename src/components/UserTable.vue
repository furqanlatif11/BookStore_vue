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
        <v-btn color="red"><v-icon>mdi-delete</v-icon> Delete</v-btn>
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
    }
  },
};
</script>

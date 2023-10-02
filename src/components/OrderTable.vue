<template>
  <v-table density="compact" elevation="5">
    <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">User ID</th>
        <th class="text-left">Total Amount</th>
        <th class="text-left">Status</th>
        <th class="text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in info" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.user_id }}</td>
        <td>{{ item.total_amount }}</td>
        <td>{{ item.status }}</td>
        <td>
          <v-btn color="red" @click="deleteOrder(item.id)">
            <v-icon>mdi-delete</v-icon> Delete
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: [], // Initialize as an empty array
    };
  },
  mounted() {
    this.fetchOrderData();
  },
  methods: {
    async fetchOrderData() {
      try {
        const response = await axios.get('http://10.0.10.220:8080/api/order', {}, {
          headers: {
            'Authorization': 'Bearer 110|CPALj2mDX3c6S03Iyc1oWVU6tpIVTzgusbsuQJcN64cae692'
          }
        });
        this.info = response.data;
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    },
    deleteOrder(orderId) {
      // Implement delete order logic here
    },
  },
};
</script>

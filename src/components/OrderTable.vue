<template>
    <v-app>
    </v-app>
    <v-main>
        <v-table density="compact" elevation="5" class="p   b-5" >
      <thead>
        <tr>
            <th class="text-left">
            Order ID
          </th>
         
          <th class="text-left">
            User Name
          </th>
          <th class="text-left">
            Email
          </th>
         
          <th class="text-left">
            Status
          </th>

        </tr>
      </thead>
      <tbody  class="p-5">
        <tr
          v-for="item in info"
          :key="item.name"
          class="table-row"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <v-menu offset-y class="v-menu__content">
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" color="primary">Change Status</v-btn>
  </template>
  <v-list class="dropdown-menu">
    <v-list-item v-for="(statusOption, index) in statusOptions" :key="index">
      <v-list-item-title @click="updateStatus(item, statusOption)">
        {{ statusOption }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>

        </tr>
      </tbody>
    </v-table>
    </v-main>
  </template>
  <script>
  export default {
    data () {
      return {
        info: [
          {
            id:"1001",
            name: 'Muhammad Ali',
            email: "m.ali123@mail.com",
            status: "Processing",
          },
        //   {
        //     id:"1002",
        //     name: 'Muhammad Ahmad',
        //     email: "m.ahmad@mail.com",
        //     status: "Dispatched",
        //   },
        //   {
        //     id:"1003",
        //     name: 'Mukhtar Ali',
        //     email: "mukhtar@mail.com",
        //     status: "Delivered",
        //   },
 
        ],
        statusOptions: ["Processing", "Dispatched", "Delivered"],
      }
    },
    methods: {
    updateStatus(item, newStatus) {
      item.status = newStatus;
    },
  },

  };
 
</script>


<style scoped>
/* Add padding to table rows */
.table-row {
  padding: 10px;
}

/* Style for dropdown menu */
.dropdown-menu {
  min-width: 150px;
}

/* Adjust z-index to ensure dropdown is visible */
.v-menu__content {
  z-index: 9999;
}
</style>

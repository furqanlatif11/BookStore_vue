<template>
    <v-table density="compact" elevation="5" >
      <thead>
        <tr>
          <th class="text-left">
            User ID
          </th>
          <th class="text-left">
            User Name
          </th>
          <th class="text-left">
            Email
          </th>

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in info"
          :key="item.name"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>

        </tr>
      </tbody>
    </v-table>
  </template>
  <script>
  export default {
    data () {
      return {
        info: [
          {
            id:"01",
            name: 'Muhammad Ali',
            email: "m.ali123@mail.com",
          },
          {
            id:"02",
            name: 'Muhammad Ahmad',
            email: "m.ahmad@mail.com",
          },
          {
            id:"03",
            name: 'Mukhtar Ali',
            email: "mukhtar@mail.com",
          },
 
        ],
      }
    },
  }
</script>
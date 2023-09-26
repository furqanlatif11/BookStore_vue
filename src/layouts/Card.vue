<template>
  <v-container class="position justify-center">
    <div class="mb-5 text-center">
      <h1 class="text-primary">Recents Blogs</h1>
    </div>
    <v-row class="pb-4 mt-4">
      <v-col v-for="n in 1" :key="n" cols="12" sm="12" md="12" :lg="col">
        <v-card class="mx-auto elevation-5 disp-card" :width="wdts">
          <template v-slot:title> My First Blog </template>
          <!-- Replace "Author" with {{ author }} to dynamically set the author's name -->

          <v-card-text> lorem ipsum hello my name is Furqan </v-card-text>
          <v-textarea
            variant="filled"
            auto-grow
            label="Reviews"
            rows="2"
            row-height="20"
          ></v-textarea>
          <div class="text-center mb-4">
            <v-btn variant="tonal"> Delete </v-btn>
          </div>
        </v-card>

        <div class="d-flex justify-center align-center">
          <v-table class="elevation-5 mt-10 w-75">
            <thead class="">
              <tr>
                <th><v-icon class="">mdi-account</v-icon></th>
                <th class="text-left">ID</th>
                <th class="text-left">Username</th>
                <th class="text-left">Email</th>
                <th>
                  <div class="text-end">
                    <v-btn class="text-right">Delete</v-btn>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>Username</td>
                <td>email</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    author: String, // Prop to receive the author's name dynamically
    col: String,
    wdts: String,
  },
};
</script>

<style>
.position {
  margin-top: 140px;
}

/* Add shadow to cards using elevation classes */
.elevation-5 {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.disp-card {
  background-color: white;
}
.disp-card:hover {
  background-color: bisque;

  border: 1px solid black;
}
</style>

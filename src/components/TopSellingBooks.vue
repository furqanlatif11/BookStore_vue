<template>
    <div class="mt-10">
       <h1 class="text-center">
        Bestselling Books
       </h1>
    </div>
<div id="card">
  <v-app id="inspire">
    <v-card class="mx-auto"
            max-width="344"
            color="#fec325"
            hover
            link
            href="">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>
  
      <v-card-title>
        AKO
      </v-card-title>
  
      <v-card-subtitle>
        Army Knowledge Online
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn text>SHARE</v-btn>
  
        <v-btn
          color="#000"
          text
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Army Knowledge Online provides web-based enterprise information services to the United States Army, joint, and Department of Defense customers.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-app>
</div>

</template>
<script>
new Vue({
  el: '#card',
  vuetify: new Vuetify(),
  data: () => ({
    show: false,
  }),
});
new Vuetify({
  icons: {
    iconfont: 'mdi', // default
    values: {
      product: 'mdi-dropbox',
      support: 'mdi-lifebuoy',
      steam: 'mdi-steam-box',
      pc: 'mdi-desktop-classic',
      xbox: 'mdi-xbox',
      playstation: 'mdi-playstation',
      switch: 'mdi-nintendo-switch',
    },
  },
})

</script>
<style>
.mx-auto {
  margin: 20px;
  box-shadow: 9px 9px 9px rgba(128,128,128,0.6);
}
.mx-auto:hover {
  box-shadow: 9px 9px 9px rgba(20,20,20,0.6);
}
</style>
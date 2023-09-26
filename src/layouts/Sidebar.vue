<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
       
        
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" :title="blog" value="allblog" @click="displayblog"></v-list-item>
          <v-list-item v-if = "useroption" prepend-icon="mdi-account-multiple" :title="user" value="alluser"></v-list-item>
          <v-list-item prepend-icon="mdi-star" :title="info" value="personal"></v-list-item>
          <v-list-item v-if = "useroption" prepend-icon="mdi-plus" :title="adduser" value="newuser" @click="newuser"></v-list-item>
          <v-list-item v-if = "blogoption" prepend-icon="mdi-plus" :title="addblog" value="newblog" @click="newblog"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
</v-card>
</template>


<script>


  export default
  {
    props:
    {
      user: String,
      blog: String,
      info: String,
      addblog: String,
      adduser: String,
      useroption: true,
      blogoption: true,
    },
    methods:
    {
      newuser()
      {
        this.$router.push({path:'/adduser'});
      },
      newblog()
      {
        this.$router.push({path:'/addblog'});
      },
      displayblog()
      {
        console.log("all blogs")
      }
    }
  }
</script>


<style>
.v-navigation-drawer__content
{
    margin-top: 30%;
    height: 70%;
}
</style>
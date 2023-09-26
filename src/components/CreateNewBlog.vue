<template>
  <v-app>
    <Navbar title="User Dashboard" />
  </v-app>

  <v-container>
    <div class="d-flex justify-center align-center">
      <div class="w-75 rounded-lg">
        <v-form
          @submit.prevent="createBlogPost"
          class="elevation-5 pl-5 pr-10 pt-5 pb-5"
        >
          <!-- Title Input -->
          <v-text-field
            v-model="blog.title"
            label="Title"
            required
          ></v-text-field>
          <br /><br />

          <!-- Description Input -->
          <v-textarea
            v-model="blog.description"
            label="Description"
            required
          ></v-textarea>
          <br /><br />

          <!-- Image Upload -->
          <v-file-input
            v-model="blog.image"
            accept="image/*"
            label="Image"
            @change="handleImageUpload"
          ></v-file-input>
          <br /><br />

          <!-- Divider -->
          <v-divider></v-divider>

          <!-- Post Button -->
          <v-btn type="submit" color="primary">Post</v-btn>
        </v-form>
      </div>
    </div>
  </v-container>
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
//import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      blog: {
        title: "",
        description: "",
        image: null, // You can store the selected image here
      },
    };
  },
  methods: {
    createBlogPost() {
        const usertoken = localStorage.getItem("access_token");
        console.log(usertoken)
      // Create a FormData object to send the form data, including the image file
      const formData = new FormData();
      formData.append("title", this.blog.title);
      formData.append("description", this.blog.description);
      formData.append("image", this.blog.image);

      // Make the API request using fetch
      fetch("http://10.0.10.211:3300/api/createpost", {
        method: "POST",
        headers:{'Content-Type': 'application/json', Authorization: `Bearer ${usertoken}`},
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Handle a successful response, e.g., show a success message
            console.log("Blog post created successfully");
          } else {
            // Handle an error response, e.g., show an error message
            console.error("Failed to create blog post");
          }
        })
        .catch((error) => {
          // Handle network errors or other issues
          console.error("An error occurred:", error);
        });
    },
    handleImageUpload(event) {
      // Handle image upload and store the selected image in the data object
      this.blog.image = event.target.files[0];
    },
  },
};
</script>

<template>
  <div class="bg-deep-purple pt-10">
    <v-container fluid class="pt-10">
      <!-- Hero Section -->
      <v-row>
        <!-- Left Column - Text -->
        <v-col cols="12" md="6" class="hero-text pt-10">
          <div class="wrapper">
            <h1 class="typing-demo ml-10">THINK & GROW RICH!!</h1>
          </div>
          <p class="text-start ps-10">
            Celebrate the joy of reading with our extensive selection of books,
            where each page holds the promise of a new adventure. From timeless
            classics to contemporary bestsellers, our bookstore is a treasure
            trove for book lovers of all genres.
          </p>

          <v-card
            class="rounded border ms-10 mt-10"
            max-width="400px"
            max-height="200px"
            elevation="5"
          >
            <div class="d-flex">
              <article>
                <v-img
                  src="src/assets/images/Untitled_design2.png"
                  width="100px"
                  height="100px"
                ></v-img>
              </article>
              <article class="">
                <v-card-title>Think & Grow Rich</v-card-title>
                <v-card-text class="pb-0">Rating</v-card-text>
                <v-icon color="orange ms-3">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon> 
                <v-divider class="mt-3"></v-divider>   
                <article class="mt-3 d-flex justify-space-around">
                <a href="" class="ms-3 text-primary"><v-icon >mdi-cart</v-icon></a>
                <a href="" class="ms-3 "  ><v-icon color="red">mdi-heart</v-icon></a>
                <a href="" class="ms-3 "  ><v-icon color="black">mdi-shopping</v-icon></a>
              </article>            
              </article>
             
              <v-divider></v-divider>
            </div>
           
          </v-card>
          <v-btn color="warning ml-10 mt-5">EXPLORE MORE</v-btn>
          <router-link to="Login"><v-btn color="warning ml-10 mt-5" variant="outlined"
            >BUY NOW</v-btn
          > </router-link>
        </v-col>

        <!-- Right Column - Image -->
        <v-col cols="12" md="6">
          <div class="d-flex justify-content-center ">
            <v-img
              src="src/assets/images/thinking-man-gf9b9e7a8b_1920.png"
              max-width="500px"
              class="pt-10"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Your main content here -->
   
  </div>
</template>

<script>
export default {
  name: "App",
  name: "App",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Add custom CSS styles here for hero-text and hero-image */
.hero-text {
  padding: 20px;

  flex-direction: column;
}

.hero-image {
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

.wrapper {
  /* This part is important for centering */
  display: grid;
  place-items: center;
}

.typing-demo {
  width: 20ch;
  animation: typing 2s steps(22), blink 0.5s infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 4em;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

/* Media query for mobile screens */
@media (max-width: 768px) {
  .hero-text {
    padding: 10px;
  }

  .typing-demo {
    font-size: 2.5em;
  }
}
.position-relative {
  position: relative;
}

/* Ensure the image takes the full width */
.max-width-100 {
  max-width: 100%;
}

</style>

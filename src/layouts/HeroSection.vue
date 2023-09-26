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

          <v-btn color="warning ml-10 mt-5">BESTSELLER</v-btn> 
          <v-btn color="warning ml-10 mt-5"></v-btn> 

        </v-col>

        <!-- Right Column - Image -->
        <v-col cols="12" md="6">
          <div class="d-flex justify-content-center">
            <v-img
              src="src/assets/images/thinking-man-gf9b9e7a8b_1920.png"
              max-width="500px"
            ></v-img>
          </div>
          <v-card class="mt-5 position-relative d-flex" style="z-index: 1; width: 300px;">
              <v-img
                src="src/assets/images/Book-2.png"
             max-width="150px"
              ></v-img>
              <v-card-title>White Hand</v-card-title>
              <p>By Napolian Hill</p>
            </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Your main content here -->
    <v-main>
      <!-- Your page content goes here -->
    </v-main>
  </div>
</template>

<script>
export default {
  name: "App",
  name: "App",
  data() {
    return {
      carouselItems: [
        {
          src: "src/assets/images/Book-Featured-Image-ALL-1920X1080_1.jpg",
          alt: "Image 1",
        },
        { src: "src/assets/images/Book-2.png", alt: "Image 2" },
        {
          src: "src/assets/images/MOTH_HowTellStory_HC_bookshot_facing_1_480x480.webp",
          alt: "Image 3",
        },
        // Add more carousel items as needed
      ],
    };
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
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
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

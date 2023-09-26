<template>
    <v-app>
        <Navbar title="User Dashboard"/>
    </v-app>
    <Sidebar blog="All Blogs" info="Personal Info" :useroption="false" addblog="Add Blogs" :blogoption="true"/>
    <!-- <Card/> -->
    <div class="position">
        <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" md="6" class="px-10">
                <v-card>
                    <v-card-title>
                        <h2>Add Blog</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="addBlog">
                            
                            <v-text-field v-model="blog.title" label="Title" required outlined></v-text-field>

                            
                            <v-textarea v-model="blog.description" label="Description" required outlined></v-textarea>

                            
                            <v-text-field :value="author" label="Author" readonly outlined></v-text-field>

                            
                            <v-container fluid>
                                <v-btn type="submit" color="primary">Add Blog</v-btn>
                                <v-btn class ="mx-2" color="primary">Show All Blogs</v-btn>
                            </v-container>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import Sidebar from '@/layouts/Sidebar.vue'
    import Navbar from '@/layouts/Navbar.vue'
    import Card from '@/layouts/Card.vue'
export default {
    components:
        {
            Sidebar,
            Navbar,
            Card
        },
    props: {
        author: String, // The author is passed as a prop
    },
    data() {
        return {
            blog: {
                title: '',
                description: '',
            },
        };
    },
    methods: {
        addBlog() {
            // Implement your logic to add the blog here
            // You can access the title, description, and author using this.blog.title, this.blog.description, and this.author
            // For example, you can send an API request to add the blog
            console.log('Adding blog:', this.blog);
        },
    },
};
</script>
<style>
.position{
    margin-top: 140px;
}
/* .v-application__wrap
{
    min-height: 0dvh;
} */
</style>
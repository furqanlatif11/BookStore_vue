<template>
    <v-app>
        <Navbar title="User Dashboard"/>
    </v-app> 
    <Card col="12" wdts="600px"/>
</template>



<script>
    import Navbar from '@/layouts/Navbar.vue'
    import Card from '@/layouts/Card.vue'
    export default
    {
        components:
        {
      
            Navbar,
            Card
        }
    }
</script>
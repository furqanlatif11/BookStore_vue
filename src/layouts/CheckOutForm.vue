<template>
 
    <h1 class="mt-10 ml-5">Enter Details</h1>

    <v-container>
        <v-form v-model="valid" class="w-100 border rounded form-pad" >
            <div class="p-5">
                <v-row no gutters>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-text-field v-model="firstname" :rules="nameRules" label="First name" required hide-details
                            class=""></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-text-field v-model="lastname" :rules="nameRules" label="Last name" hide-details required
                            class=" "></v-text-field>
                    </v-col>
                </v-row>
                <v-row no gutters>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-text-field v-model="email" class="" :rules="emailRules" label="E-mail" hide-details
                            required></v-text-field>

                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-text-field v-model="email" :rules="emailRules" label="Phone Number" hide-details
                            required></v-text-field>

                    </v-col>
                </v-row>


                <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Province"
                    required class="w-75 mt-5"></v-select>


                <v-text-field v-model="email" class=" " :rules="emailRules" label="Shipping Address" hide-details
                    required></v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="Billing  Address" hide-details required
                    class=" mt-5"></v-text-field>
                <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
                    label="Agree Terms & Condition" required></v-checkbox>
                    <v-checkbox v-model="checkbox1" 
                    label="Save Information for Future" class="mt-0"></v-checkbox>

                 
            </div>
        </v-form>
    </v-container>
</template>


<script>
export default {
    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            value => {
                if (value) return true

                return 'Name is required.'
            },
            value => {
                if (value?.length <= 10) return true

                return 'Name must be less than 10 characters.'
            },
        ],
        email: '',
        emailRules: [
            value => {
                if (value) return true

                return 'E-mail is requred.'
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true

                return 'E-mail must be valid.'
            },
        ],
        items: [
            'Punjab',
            'Sindh',
            'KPK',
            'Islamabad',
            'Balochistan'
        ],
        checkbox: false,
        checkbox1: false,

    }),

}
</script>

<style>
.form-pad{
    padding: 10px;
   
}
</style>

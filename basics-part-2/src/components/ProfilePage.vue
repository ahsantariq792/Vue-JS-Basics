<template>
    <h1>Profile Page</h1>
    <input type="text" name="email" v-model="email" />
    <input type="password" name="password" v-model="password" />
    <button v-on:click="adddata()">Add Data</button>
</template>

<script>

import axios from 'axios'
export default {
    name: 'ProfilePage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        adddata() {
            console.log("email", this.email)
            console.log("password", this.password)
            axios.post("", {
                email: this.email,
                password: this.password
            })
        }
    },
}


</script>  
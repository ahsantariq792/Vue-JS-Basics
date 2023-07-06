<template>
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <button v-on:click="getData()">Get Data</button>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        getData() {
            console.warn("values: ", this.email, this.password)
        }
    }
}
</script>
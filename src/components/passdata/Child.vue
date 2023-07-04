<template>
    <h1>Name {{ name }}</h1>
    <h1>Name {{ user.name }}</h1>
    <h1>Name {{ user.number }}</h1>
    <button v-on:click="getData()">Get Data</button>
</template>

<script>
export default {
    // data() {
    //     return {
    //         name: "ahsan"
    //     }
    // },
    props: {
        name: String,
        user: Object,
        getData: Function
    }
}
</script>
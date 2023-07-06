<template>
    <h1>Name {{ data.name }}</h1>
    <h1>Name {{ data.number }}</h1>
    <button v-on:click="getData(data.name)">Get Data</button>

</template>

<script>
export default {
    name: "Child2",
    props: {
        data: Object,
        getData: Function,
    }
}
</script>
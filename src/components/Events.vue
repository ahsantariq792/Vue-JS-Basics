<template>
    <button v-on:click="getData()">Click</button>
    <button v-on:dblclick="getData2()">Double Click</button>
    <h1 v-on:mouseover="getData3()">Hover Me</h1>
</template>


<script>

export default {
    methods: {
        getData() {
            alert("button clicked")
        },
        getData2() {
            alert("button double clicked")
        },
        getData3() {
            alert("Hovered")
        },
    },
}
</script>
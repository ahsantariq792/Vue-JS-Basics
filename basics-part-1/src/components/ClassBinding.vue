<template>
    <h1 :class="classes">Hello</h1>
    <br />
    <button v-on:click="toggleBackground">Toggle</button>
</template>

<script>
export default {
    data() {
        return {
            dark: true
        }
    },
    methods: {
        toggleBackground() {
            return this.dark = !this.dark
        }
    },
    computed: {
        //if there are more than one class than we use it in computed
        classes() {
            return {
                darktheme: this.dark,
                other: this.dark
            }
        }
    }
}
</script>
<style>
.darktheme {
    background-color: green;
}

.other {
    font-size: 40px;
}
</style>
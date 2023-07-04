<template>
    <h1 v-if="show">If Condition</h1>
    <h1 v-else>Else Condition</h1>
    <button v-on:click="toggle">Toggle</button>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        toggle() {
            return this.show = !this.show
        }
    }
}

</script>
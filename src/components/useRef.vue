<template>
    <input type="text" ref="input" />
    <button v-on:click="getname()">Get Name</button>
</template>

<script>
export default {
    methods: {
        getname() {
            this.$refs.input.focus()
            let value = this.$refs.input.value
            console.log(value)
        }
    }
}
</script>
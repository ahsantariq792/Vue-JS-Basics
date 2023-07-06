<template>
    <input type="text" v-model="count" />
    <h1>{{ count }}</h1>
</template>

<script>
export default {
    data() {
        return {
            count : 10
        }
    }
}


</script>
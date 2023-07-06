<template>
    <div v-html="tag"></div>
</template>

<script>
export default {
    data(){
        return {
            tag : "<h1>Hello World</h1>"
        }
    }
}</script>
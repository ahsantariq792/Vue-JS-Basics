<template>
    <h1>Technology</h1>
    <ul>
        <li v-for="item in technology" :key="item">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            technology: ['java', 'php', 'html']
        }
    }
}


</script>
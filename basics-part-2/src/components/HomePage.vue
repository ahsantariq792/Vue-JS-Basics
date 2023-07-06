<template>
    <h1>Home Page</h1>
    <ul v-for="item in list" :key="item">
        <li>{{ item.id }}</li>
        <li> {{ item.email }}</li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HomePage',
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        let result = await axios.get("https://reqres.in/api/users?page=1");
        console.log(result.data.data)
        this.list = result.data.data
    }

}


</script>
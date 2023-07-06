<template>
    <Child name="ahsan123" :user="user" :getData="getData" />

    <ul v-for="item in details" :key="item.name">
        <li>
            <Child2 :data="item" :getData="getName" />
        </li>
    </ul>
</template>

<script>
import Child from "./Child.vue"
import Child2 from "./Child2.vue"
export default {
    data() {
        return {
            user: { name: "ahsan", number: 10101010 },
            details: [
                { name: "ahsan", number: 10101010 },
                { name: "areeb", number: 10101010 },
                { name: "asad", number: 10101010 },
                { name: "ahmas", number: 10101010 },

            ]

        }
    },
    components: {
    Child,
    Child2
},
    methods: {
        getData() {
            console.warn("parent fuction called")
        },
        getName(name) {
            console.warn(name)
        },
    }
}
</script>
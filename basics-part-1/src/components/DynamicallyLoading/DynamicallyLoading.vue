<template>
    <button @click="tab = 'Child1'">Load Child1</button>
    <button @click="tab = 'Child2'">Load Child2</button>
    <button @click="tab = 'Child3'">Load Child3</button>
    <component :is="tab" />
</template>
    
<script>
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import Child3 from './Child3.vue';
export default {
    name: "Parent",
    components: {
        Child1, Child2, Child3
    },
    data() {
        return {
            tab: "Child1"
        }
    }
}
</script>


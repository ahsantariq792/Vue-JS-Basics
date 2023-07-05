<template>
    <Child>
        <h1>HI</h1>
    </Child>
    <Child></Child>
    <Child><img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606115915090-be18fea23ec7%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8anBlZ3xlbnwwfHwwfHx8MA%253D%253D%26w%3D1000%26q%3D80&tbnid=yjddZ9X_076QEM&vet=12ahUKEwj26pz7jfj_AhVqmycCHTuuASwQMygAegUIARC8AQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fjpeg&docid=70Qa_zRseqy6eM&w=1000&h=1250&q=download%20image%20in%20jpeg&ved=2ahUKEwj26pz7jfj_AhVqmycCHTuuASwQMygAegUIARC8AQn" />
    </Child>


    <MultipleSlots>
        <template v-slot:header>
            <h1>Header content</h1>
        </template>
        <template v-slot:content>
            <h1>content</h1>
        </template>
        <template v-slot:footer>
            <h1>footer content</h1>
        </template>
    </MultipleSlots>
</template>

<script>
import Child from './Child.vue';
import MultipleSlots from './MultipleSlots.vue'
export default {
    components: {
        Child,
        MultipleSlots,
    }
}

</script>
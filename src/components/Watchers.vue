<template>
    <h1>{{ count }}</h1>
    <button @click="count=count+1"> + </button>
    <button @click="count=count-1"> - </button>
</template>

<script>
export default{
    data(){
        return{
            count:0
        }
    },
    watch:{
       count(val,prev){
        if (val>5 && val>prev){
            alert("message")
        }
       }
    }
}
</script>
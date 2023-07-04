<template>
  <h1>Hello World {{ 10 + 10 }}</h1>
  <h1>Hello World {{ email }}</h1>
  <h1>Hello World {{ getName() }}</h1>
  <h1>Hello World {{ getName2("ahsantatfeau") }}</h1>
  <h1>Hello World {{ getNumber().number1 }}</h1>
  <h1>Hello World {{ getNumber().name }}</h1>
</template>

<script>

export default {
  data() {
    return {
      email: "ahsan@gmail.com",
      name: "eufblefjsdbf",
      getName: function () {
        return "ahsan"
      }
    }
  },
  methods: {
    getName2(name) {
      return name;
    },
    getNumber() {
      return {
        name: this.name,
        number1: 101010010101,
        number2: 24154324321424,
      }
    },
  },
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
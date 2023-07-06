<template>
  <router-link to="/">Home</router-link><br />
  <router-link to="/profile">Profile</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>
<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script setup>
import AppLayout from "./components/AppLayout.vue";
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
ul {
  list-style: none;
}
nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

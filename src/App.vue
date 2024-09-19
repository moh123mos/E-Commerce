<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script setup>
import AppLayout from "./components/AppLayout.vue";
</script>
<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  padding-right: 0 !important;
  overflow: auto !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
ul {
  list-style: none;
}
@media (max-width: 991px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}
@media (min-width: 992px) {
  .mobile {
    display: none !important;
  }
  .desktop {
    display: block;
  }
}
</style>

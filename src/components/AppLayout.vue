<template>
  <div class="layout">
    <NavBar></NavBar>
    <FixedNavbar />
    <main>
      <slot></slot>
    </main>
    <sidebarVue />
    <FooterApp />
  </div>
</template>

<script setup>
import FixedNavbar from "./global/FixedNavbar.vue";
import FooterApp from "./global/FooterApp.vue";
import NavBar from "./global/navBar.vue";
import sidebarVue from "./global/sidebarComponent.vue";
</script>

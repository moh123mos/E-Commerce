<template>
  <div class="layout">
    <!-- navbar -->
    <NavBar></NavBar>
    <FixedNavbar />
    <!--*/ navbar /*-->
    <!-- content -->
    <main>
      <slot></slot>
    </main>
    <!--*/ content /*-->
    <!-- sidebar -->
    <sidebarVue />
    <!--*/ sidebar /*-->
    <!-- footer -->
    <!--*/ footer /*-->
  </div>
</template>

<script setup>
import FixedNavbar from "./global/FixedNavbar.vue";
import NavBar from "./global/navBar.vue";
import sidebarVue from "./global/sidebarComponent.vue";
</script>

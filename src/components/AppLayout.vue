<template>
  <div class="layout">
    <!-- navbar -->
    <NavBar></NavBar>
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
import NavBar from "./global/navBar.vue";
import sidebarVue from "./global/sidebarComponent.vue";
</script>

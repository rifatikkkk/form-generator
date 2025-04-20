<template>
  <NavBar></NavBar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/UI/NavBar.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>

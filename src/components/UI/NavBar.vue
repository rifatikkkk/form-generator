<template>
  <div class="navbar">
    <div @click="$router.push('/')">Web page</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/about')">About</my-button>
      <my-button @click="$router.push('/register')">Register</my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "@/components/UI/MyButton.vue";
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.navbar__btns {
  display: flex;
  gap: 10px;
}
</style>

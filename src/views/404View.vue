<script setup></script>

<template>
  <div class="bg-container error">
    <ErrorComponent />
  </div>
</template>

<style scoped>
.error {
  display: flex;
  background-image: url('../error_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  items-align: center;
  justify-content: center;
}
</style>

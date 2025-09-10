<script setup>
import ErrorComponent from '@/components/ErrorComponent.vue'
</script>

<template>
  <div class="error-bg-container error">
    <ErrorComponent />
  </div>
</template>

<style scoped>
.error-bg-container {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
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

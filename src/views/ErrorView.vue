<script setup>
import ErrorComponent from '@/components/ErrorComponent.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const errorMessage = (route.query?.error || '404, страница не найдена.')
</script>

<template>
  <div class="error-bg-container error">
    <ErrorComponent :error="errorMessage" />
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

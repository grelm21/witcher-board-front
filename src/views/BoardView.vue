<script setup>
import { useLocationStore } from '@/stores/locationStore'
import { onMounted } from 'vue'
import { computed } from 'vue'
import BoardBackgroundConponent from '@/components/BoardBackgroundConponent.vue'
import LocationSwitchComponent from '@/components/board/LocationSwitchComponent.vue'
import ErrorComponent from '@/components/ErrorComponent.vue'
const locationStore = useLocationStore()

onMounted(async () => {
  await locationStore.fetchItems()
})

const isLoading = computed(() => locationStore.isLoading)
const isError = computed(() => locationStore.error)
</script>

<template>
  <BoardBackgroundConponent />
  <LocationSwitchComponent v-if="!isLoading && !isError" />
  <div class="error-bg-container error-bg" v-if="isError">
    <ErrorComponent :error="locationStore.error" />
  </div>
</template>

<style scoped>
.error-bg {
  background-image: radial-gradient(circle at 50% 50%, #2b2325 70%, #1b1611 90%);
}
</style>

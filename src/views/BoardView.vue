<script setup>
import { useLocationStore } from '@/stores/locationStore'
import { onMounted } from 'vue'
import { computed } from 'vue'
import BoardBackgroundConponent from '@/components/BoardBackgroundConponent.vue'
import LocationSwitchComponent from '@/components/board/LocationSwitchComponent.vue'
const locationStore = useLocationStore()

onMounted(async () => {
  await locationStore.fetchItems()
})

const isLoading = computed(() => locationStore.isLoading)
</script>

<template>
  <BoardBackgroundConponent />
  <LocationSwitchComponent v-if="!isLoading" />
</template>

<style scoped></style>

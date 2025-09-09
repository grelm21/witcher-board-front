<script setup>
import { useLocationStore } from '@/stores/locationStore'
import { computed } from 'vue'
import ErrorComponent from '@/components/ErrorComponent.vue'
const locationStore = useLocationStore()
const currentLocation = computed(() => locationStore.item)
const locationError = computed(() => locationStore.error)
</script>

<template>
  <Transition name="fade">
    <div class="bg-container velen" v-show="currentLocation?.code === 'velen'"></div>
  </Transition>
  <Transition name="fade">
    <div class="bg-container kaer" v-show="currentLocation?.code === 'kaer'"></div>
  </Transition>
  <Transition name="fade">
    <div class="bg-container skellige" v-show="currentLocation?.code === 'skellige'"></div>
  </Transition>
  <Transition name="fade">
    <div class="bg-container novigrad" v-show="currentLocation?.code === 'novigrad'"></div>
  </Transition>

</template>

<style scoped>

.velen {
  width: 100%;
  height: 100%;
  background-image: url('../velen.jpg');
  background-repeat: repeat;
  background-size: 500px 500px;
}

.kaer {
  width: 100%;
  height: 100%;
  background-image: url('../kaer.jpg');
  background-repeat: repeat;
  background-size: 2000px 1200px;
}

.skellige {
  width: 100%;
  height: 100%;
  background-image: url('../skellige.jpg');
  background-repeat: repeat;
  background-size: 500px 500px;
}

.novigrad {
  width: 100%;
  height: 100%;
  background-image: url('../novigrad.jpg');
  background-repeat: repeat;
  background-size: 1000px 1000px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

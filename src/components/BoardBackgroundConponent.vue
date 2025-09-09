<script setup>
defineProps({
  currentLocation: Object,
})
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

.bg-container {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

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

</style>

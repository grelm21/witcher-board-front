<script setup>
import { useLocationStore } from '@/stores/locationStore'
import { ref } from 'vue'
import { computed } from 'vue'
import { watch } from 'vue'

const locationStore = useLocationStore()
const currentLocation = computed(() => locationStore.item)
const isBounce = ref(false)
const isForward = ref(false)
const isBack = ref(false)

watch(isForward, () => {
  setTimeout(() => {
    if (isForward.value) {
      isForward.value = false
    }
  }, 1100)
})

watch(isBack, () => {
  setTimeout(() => {
    if (isBack.value) {
      isBack.value = false
    }
  }, 1100)
})

watch(isBounce, () => {
  setTimeout(() => {
    if (isBounce.value) {
      isBounce.value = false
    }
  }, 1100)
})
</script>

<template>
  <div class="grid-container">
    <div class="location-select-sub">
      <div
        :class="[`location-button-forward`, { button_disabled: isForward || isBack }]"
        @click="(locationStore.prevLocation(), (isBack = true))"
        @mouseenter="isBounce = true"
      >
        <svg
          class="mirror"
          fill="currentColor"
          width="40px"
          height="40px"
          viewBox="-28.75 0 156.07 156.07"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="location-select-shield">
        <p :class="[{ bounce: isBounce }, { slide_fwd: isForward }, { slide_back: isBack }]">
          {{ currentLocation.name }}
        </p>
      </div>
      <div
        :class="[`location-button-forward`, { button_disabled: isForward || isBack }]"
        @click="(locationStore.nextLocation(), (isForward = true))"
        @mouseenter="isBounce = true"
      >
        <svg
          fill="currentColor"
          width="40px"
          height="40px"
          viewBox="-28.75 0 156.07 156.07"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  z-index: 10;
}

.location-select-sub {
  display: flex;
  grid-column: span 12;
  margin-top: 20px;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.location-select-shield {
  display: flex;
  height: 60px;
  width: 25%;
  background: radial-gradient(circle at 50% 50%, #2b2325 95%, #4d494a 100%);
  border-radius: 5px;
  border: 5px solid #6b6462;
  color: #f2e6c9;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  font-family: 'Forum', serif;
  box-shadow: 6px 6px 12px rgba(30, 20, 15, 0.8);
}

@keyframes bounceInRight {
  0% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(20px);
  }
  60% {
    transform: translateX(-30px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

.bounce {
  animation: bounceInRight 0.4s ease forwards;
}

.slide_back {
  position: relative;
  animation: slide_back_animation 1s;
  animation-fill-mode: both;
}

@keyframes slide_back_animation {
  0% {
    left: 0;
    opacity: 1;
  }

  40% {
    left: 150px;
    opacity: 0;
  }

  60% {
    right: 150px;
    opacity: 0;
  }

  100% {
    right: 0;
    opacity: 1;
  }
}

.slide_fwd {
  position: relative;
  animation: slide_fwd_animation 1s;
  animation-fill-mode: both;
}

@keyframes slide_fwd_animation {
  0% {
    left: 0;
    opacity: 1;
  }

  40% {
    left: -150px;
    opacity: 0;
  }

  60% {
    left: 150px;
    opacity: 0;
  }

  100% {
    left: 0;
    opacity: 1;
  }
}

.location-button-forward {
  display: flex;
  color: #f2e6c9;
  background-color: #2b2325;
  border-radius: 5px;
  border: 5px solid #4a4341;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background: #3a3a3a;
    border-radius: 8px;
    box-shadow:
      inset 3px 3px 6px rgba(0, 0, 0, 0.7),
      inset -3px -3px 6px rgba(255, 255, 255, 0.2);
  }

  .mirror {
    transform: scaleX(-1);
  }
}

.location-button-forward svg {
  pointer-events: none;
}

.button_disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>

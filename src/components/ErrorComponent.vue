<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const props = defineProps({
  error: {
    type: String,
  },
})

function reloadPage() {
  router.push('/')
}

const errorText = () => {
  let standardText = ''
  if (route.name === 'ConnError' || route.name === '404') {
    standardText = 'Дальше живут драконы.'
  } else {
    standardText = 'Никак вы все, бл***, не научитесь.'
  }
  return standardText + '\n' + props.error
}
</script>

<template>
  <div class="error-container" :data-text="errorText()">
    <div class="reload-btn" @click="reloadPage()" />
  </div>
</template>

<style scoped>
.error-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 30%;
  background:
    linear-gradient(to top, #635f5d, #d3d2d1) top/100% 5px no-repeat,
    linear-gradient(to bottom, #635f5d, #d3d2d1) bottom/100% 5px no-repeat,
    linear-gradient(to left, #635f5d, #d3d2d1) left/5px 100% no-repeat,
    linear-gradient(to right, #635f5d, #d3d2d1) right/5px 100% no-repeat;
  margin: auto;

  &::after {
    content: attr(data-text);
    display: flex;
    width: 82%;
    height: 73%;
    background-color: #e2e2e2;
    font-size: 20px;
    padding: 10px 50px;
    justify-content: center;
    align-items: center;
    white-space: pre-wrap;
    background-image: linear-gradient(to bottom, #e0e7ef, #6b7a8f);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    font-weight: bold;
  }
}

.reload-btn {
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(to top, #635f5d, #d3d2d1) top/100% 3px no-repeat,
    linear-gradient(to bottom, #635f5d, #d3d2d1) bottom/100% 3px no-repeat,
    linear-gradient(to left, #635f5d, #d3d2d1) left/3px 100% no-repeat,
    linear-gradient(to right, #635f5d, #d3d2d1) right/3px 100% no-repeat;
  cursor: pointer;

  &::after {
    content: '';
    display: flex;
    width: 90%;
    height: 90%;
    background-color: #2c2b28;
    background-image: url('../refresh-svgrepo-com.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    z-index: 50;
  }

  &:hover::after {
    background-color: #635f5d;
    pointer-events: none;
  }
}
</style>

<!-- src/pages/HomePage.vue -->
<template>
  <div class="home-page">
    <SubnetCalculator />
  </div>
</template>

<script setup lang="ts">
import SubnetCalculator from '../components/SubnetCalculator.vue';
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2rem;
  background-color: #f1f5f9;
}
</style>
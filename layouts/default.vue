<script setup lang="ts"></script>

<template>
  <div>
    <CommonHeader />
    <div class="landing-wrapper">
      <slot />
    </div>
    <CommonFooter />
  </div>
</template>

<style scoped>
.landing-wrapper {
  height: 100vh;
}

</style>
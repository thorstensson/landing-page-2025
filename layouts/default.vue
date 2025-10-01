<script setup lang="ts"></script>

<template>
  <div>
    <div class="landing-wrapper">
      <slot />
    </div>
    <CommonFooter />
  </div>
</template>

<style scoped lang="scss">
.landing-wrapper {
  display:flex;
  background:$primary;
  min-height: calc(100vh - 50px);
  min-height: calc(100dvh - 50px);
  overflow-y: hidden;
}
</style>

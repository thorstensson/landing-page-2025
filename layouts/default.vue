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
  min-height: calc(100vh - 130px);
}

.landing-wrapper,
.landing-wrapper>*:first-child {
  display:flex;
  width: 100%;
  min-height: calc(100vh - 140px);
  justify-content: center;
  align-content: center;
}
</style>

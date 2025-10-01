<script setup lang="ts">
import { NuxtLoadingIndicator } from "#components"

const isMounted = ref<boolean>(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <div class="hide" :class="{ 'on-ready': isMounted }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
html,
body {
  background-color: $primary;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.hide {
  opacity: 0;
  filter: blur(10px);
  transition: all 1s;
}

.on-ready {
  opacity: 1;
  filter: blur(0px);
}
</style>

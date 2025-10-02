<script setup lang="ts">
definePageMeta({
  layout: "default",
})

useHead({
  title: "Creative Developer • Thorstensson"
})

const scrollConfig = reactive({
  text: "                        New Folio coming October 12th 2025 @ www.thomasthorstensson.com (nothing there yet). Thanks.",
})
</script>

<template>
  <div class="page-wrapper">
    <div class="launch">
      <h1 class="launch__heading">
        New Folio: Oct 12 2025<br/>@ www.thomasthorstensson.com
      </h1>
      <p class="launch__subtext">Meanwhile Visit</p>
      <div class="launch__links">
        <a
          href="https://mp3playerp5.thomasthorstensson.com"
          target="_blank"
          class="launch__link"
        >
          mp3playerp5.thomasthorstensson.com
        </a>
        <a
          href="https://palestine-awareness.thomasthorstensson.com"
          target="_blank"
          class="launch__link"
        >
          palestine-awareness.thomasthorstensson.com
        </a>
      </div>
    </div>
    <UITextScroller :text="scrollConfig.text" />
  </div>
</template>

<style lang="scss" scoped>

.page-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-y: hidden;
}

.launch {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: center;

  &__heading {
    font-family: $sans-text;
    color: $secondary;
    font-size: 1.5rem;
    font-weight: $sans-text-wgt;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  &__subtext {
    font-family: $sans-text;
    color: $secondary;
    font-size: 1.2rem;
    font-weight: $sans-text-wgt;
    margin-bottom: 1.5rem;
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &__link {
    font-family: $sans-text;
    color: $secondary;
    font-size: 1rem;
    font-weight: $sans-text-wgt;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color:$accent1;
    }
  }
}
</style>

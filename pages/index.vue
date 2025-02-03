<script setup lang="ts">

definePageMeta({
    layout: 'default'
});

const scrollConfig = reactive({
    text: "                                  I care for creating experiences where code, visuals, SEO, & typography meet people. Barcelona based & Swede. Seeking a new frontend calling with Vue / Nuxt + _____. Let's talk …",
})
</script>

<template>
    <div class="page-wrapper">
        <ThreePostProcess />
        <UITextScroller :text="scrollConfig.text"></UiTextScroller>
    </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
    //flex 1 auto will not work due to __nuxt container so we might wanna think later...
    height: 100vh;
    overflow-y: hidden;
}
</style>
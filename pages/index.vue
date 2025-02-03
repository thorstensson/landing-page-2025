<script setup lang="ts">

definePageMeta({
    layout: 'default'
});

const scrollConfig = reactive({
    text: "                                          I'm a Swedish developer in Barcelona. I like writing code that helps people experience content through great visuals, good SEO, and clean typography. Oh, and I'm looking for a permanent job (Vue / Nuxt / TS / JS/ etc), so feel free to get back ...",
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
<script setup lang="ts">

definePageMeta({
    layout: 'default'
});

const scrollConfig = reactive({
    text: "                                     I'm a Swedish developer in Barcelona. I like writing code that helps people experience content through great visuals, good SEO, and clean typography. Oh, and I'm looking for a permanent job (Vue / Nuxt / TS / JS/ etc), so feel free to get back ...",
    speed: "100s",
})
</script>

<template>
    <div>
        <ThreePostProcess />
        <UITextScroller :speed="scrollConfig.speed" :text="scrollConfig.text"></UiTextScroller>
    </div>
</template>

<style lang="scss" scoped></style>
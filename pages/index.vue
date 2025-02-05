<script setup lang="ts">

definePageMeta({
    layout: 'default'
});

const scrollConfig = reactive({
    text: "                                  I care for creating experiences where code, visuals, SEO, & typography meet people. Barcelona / London / Malmoe based & Swede. Seeking a new frontend calling with Vue / Nuxt + _____. Let's talk …",
})

// leaving this in here as I was thinking of switching components on a setTimeOut
const compName = shallowRef(resolveComponent('ThreeBloomCircles'))

</script>

<template>
    <div class="page-wrapper">
        <component :is="compName"></component>
        <UITextScroller :text="scrollConfig.text" />
    </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
    //flex 1 auto will not work due to __nuxt container so we might wanna think later. but this seems fine..
    height: 100vh;
    overflow-y: hidden;
}
</style>
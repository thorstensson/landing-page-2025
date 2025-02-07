<script setup lang="ts">

definePageMeta({
    layout: 'default'
});

const scrollConfig = reactive({
    text: "                                                                        Swedish Developer | Designer. Ok, I don't have one niche. I code in Vue, design in Figma. Based: Barcelona / London. Open to a new role!",
})

// leaving this in here as I was thinking of switching components on a setTimeOut
const compName = shallowRef(resolveComponent('ThreeMetal'))

</script>

<template>
    <div class="page-wrapper">
        <component :is="compName" />
        <UITextScroller :text="scrollConfig.text" />
        <FxNoise />
    </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
    //flex 1 auto will not work due to __nuxt container so we might wanna think later. but this seems fine..
    height: 100vh;
    overflow-y: hidden;
}
</style>
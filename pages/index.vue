<script setup lang="ts">

definePageMeta({
    layout: 'default'
});

const scrollConfig = reactive({
    text: "                                                                        Swedish Developer | Designer. Multidisciplinary. I code in Vue / think in pixels. Based: Barcelona / London. 15+ years of working together with great people. Open to a new role!",
})

// leaving this in here as I was thinking of switching components on a setTimeOut
const compName = shallowRef(resolveComponent('ThreeHeart'))

</script>

<template>
    <div class="page-wrapper">
        <component :is="compName" />
        <UITextScroller :text="scrollConfig.text" />
    </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
    height: 100vh;
    overflow-y: hidden;
}
</style>
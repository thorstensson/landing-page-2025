<script setup lang="ts">

definePageMeta({
    layout: 'default'
});

const scrollConfig = reactive({
    text: '                        Swedish <span class="outline">frontend</span> developer & photographer. <span class="outline">Multidisciplinary</span>. Sprinting towards reboot. Open to a new frontend role. Based: <span class="outline"> Barcelona /</span> London...',
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
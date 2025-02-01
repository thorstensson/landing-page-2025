<script setup lang="ts">
defineProps<{
    text?: string
    speed?: string
}>()
</script>

<template>
    <div class="wrapper">
        <div class="marquee">
            <span>{{ text }}</span>
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    max-width: 100%;
    overflow: hidden;
    bottom: 70px;
}

.marquee {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: marquee v-bind('speed') linear infinite;

    span {
        display: inline-block;
        font-family: $sans-text;
        color: $secondary;
        font-display: fallback;
        font-family: $sans-text;
        font-size: clamp-calc(480px, 1920px, 50px, 120px);
        text-transform: uppercase;
        white-space: pre;
    }
}

@keyframes marquee {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(-100%, 0);
    }
}
</style>

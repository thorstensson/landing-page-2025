<script setup lang="ts">
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/vue/24/solid'

const model = defineModel({default:false})

defineProps<{ title: string }>()

const togglePlay = () => {
    model.value = !model.value
}
</script>

<template>
    <div class="controls">
        <SpeakerWaveIcon @click="togglePlay" class="controls__on" :class="{ 'controls__on--show': model }" />
        <SpeakerXMarkIcon @click="togglePlay" class="controls__off" :class="{ 'controls__off--show': !model }" />
    </div>
</template>

<style lang="scss" scoped>
.controls {

    &__on,
    &__off {
        fill: $accent2;
        position: absolute;
        width: 24px;
        height: auto;
        padding-bottom: 5px;
        display: none;
        transition: fill 1s;

        &:hover {
            fill:$accent3;
        }

        cursor: pointer;

        &--show {
            display: block
        }
    }

}
</style>
<script setup lang="ts">
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/vue/24/solid'
const isPlaying = ref<boolean>(false)
const model = defineModel()

defineProps<{ title: string }>()

const togglePlay = () => {
    isPlaying.value = !isPlaying.value
    model.value = isPlaying.value;
}
</script>

<template>
    <div class="controls">
        <SpeakerWaveIcon @click="togglePlay" class="controls__on" :class="{ 'controls__on--show': isPlaying }" />
        <SpeakerXMarkIcon @click="togglePlay" class="controls__off" :class="{ 'controls__off--show': !isPlaying }" />
    </div>
</template>

<style lang="scss" scoped>
.controls {

    &__on,
    &__off {
        fill:$accent3;
        position: absolute;
        width: 24px;
        height: auto;
        padding-bottom:5px;
        display: none;
        
        cursor: pointer;

        &--show {
            display: block
        }
    }

}
</style>
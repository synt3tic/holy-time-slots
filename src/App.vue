<script setup>
import { usePickerStages } from './composables/usePickerStages.js';
import { defineAsyncComponent } from 'vue';
import { STAGES } from './assets/constants/date-picker.js';
import { useDatesPicker } from './composables/useDatesPicker.js';
const PickerStageDate = defineAsyncComponent(() => import('./components/picker-stages/PickerStageDate.vue'));
const PickerStageTime = defineAsyncComponent(() => import('./components/picker-stages/PickerStageTime.vue'));

const {
    nextStage,
    prevStage,
    currentStage,
} = usePickerStages();

const { dates } = useDatesPicker();

const onNextStage = (datesList) => {
    dates.value = datesList;
    nextStage();
}
</script>

<template>
    <picker-stage-date
        v-if="currentStage === STAGES.DATE"
        :init-dates="dates"
        @to-next-stage="onNextStage"
    />
    <picker-stage-time
        v-if="currentStage === STAGES.TIME"
        :init-dates="dates"
        @to-prev-stage="prevStage"
    />
</template>

<style>
#app {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    max-width: 34rem;
    margin: 0 auto;
    padding: 1.5rem;
    font-family: 'Inter', sans-serif !important;
}

* {
    box-sizing: border-box;
}
</style>

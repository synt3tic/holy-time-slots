<script setup>
import { usePickerStages } from './composables/usePickerStages.js';
import { defineAsyncComponent, onMounted } from 'vue';
import { STAGES } from './assets/constants/date-picker.js';
import { useDatesPicker } from './composables/useDatesPicker.js';
import { useTimePicker } from './composables/useTimePicker.js';
import ResultScreen from './components/result-screen/ResultScreen.vue';
const PickerStageDate = defineAsyncComponent(() => import('./components/picker-stages/PickerStageDate.vue'));
const PickerStageTime = defineAsyncComponent(() => import('./components/picker-stages/PickerStageTime.vue'));

const {
    nextStage,
    prevStage,
    currentStage,
} = usePickerStages();

const { dates } = useDatesPicker();
const { timeMap, setMap } = useTimePicker();

/**
 * @param key {'dates'|'timeMap'}
 * @param value {Object|Array}
 */
const onNextStage = (key, value) => {
    switch (key) {
        case 'dates':
            dates.value = value;
            setMap(value);
            break;
        case 'timeMap':
            // timeMap.value = value;
            break;
        default:
            break;
    }

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
        v-else-if="currentStage === STAGES.TIME"
        :init-dates="dates"
        @to-prev-stage="prevStage"
        @to-next-stage="onNextStage"
    />
    <result-screen
        v-else-if="currentStage === STAGES.RESULT"
        :time-map="timeMap"
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
    font-family: 'Inter', sans-serif;
}
</style>

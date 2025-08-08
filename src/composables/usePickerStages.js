import { computed, ref } from 'vue';
import { STAGES } from '../assets/constants/date-picker.js';

export function usePickerStages() {
    const allStages = [STAGES.DATE, STAGES.TIME, STAGES.RESULT];
    const currentStage = ref(STAGES.DATE);
    const currentStageIndex = computed(() => {
        return allStages.indexOf(currentStage.value);
    });

    const nextStage = () => {
        const nextStage = allStages[currentStageIndex.value + 1];

        if (!nextStage) {
            console.warn('No stage found');
            return;
        }

        currentStage.value = nextStage;
    }

    const prevStage = () => {
        const prevStage = allStages[currentStageIndex.value - 1];

        if (!prevStage) {
            console.warn('No stage found');
            return;
        }

        currentStage.value = prevStage;
    }

    return {
        currentStage,
        nextStage,
        prevStage,
    }
}

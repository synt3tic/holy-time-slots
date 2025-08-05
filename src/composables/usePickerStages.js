import { computed, defineAsyncComponent, ref } from 'vue';

const STAGES = {
    DATE: 'date',
    TIME: 'time',
}


export function usePickerStages() {
    const components = {
        [STAGES.DATE]: defineAsyncComponent(() => import('../components/picker-stages/PickerStageDate.vue')),
        [STAGES.TIME]: defineAsyncComponent(() => import('../components/picker-stages/PickerStageTime.vue')),
    }

    const allStages = [STAGES.DATE, STAGES.TIME];
    const currentStage = ref(STAGES.DATE);
    const currentStageIndex = computed(() => {
        return allStages.indexOf(currentStage.value);
    });
    const isFirstStage = computed(() => currentStageIndex.value === 0);
    const isLastStage = computed(() => currentStageIndex.value === allStages.length - 1);
    const currentStageComponent = computed(() => {
        const component = components[currentStage.value];

        if (!component) {
            return null;
        }

        return component;
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
        currentStageComponent,
        isFirstStage,
        isLastStage,
        nextStage,
        prevStage,
    }
}

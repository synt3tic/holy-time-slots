<script setup>
import { ElButton } from 'element-plus';
import { usePickerStages } from './composables/usePickerStages.js';

const { nextStage, prevStage, currentStageComponent, isFirstStage, isLastStage } = usePickerStages()
</script>

<template>
    <component :is="currentStageComponent" />
    <div style="display: flex; width: 100%;">
        <ElButton :disabled="isFirstStage" @click="prevStage">Prev</ElButton>
        <ElButton :disabled="isLastStage" @click="nextStage">Next</ElButton>
    </div>
</template>

<style>

</style>

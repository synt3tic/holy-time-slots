<script setup>
import { useDatesPicker } from '../../composables/useDatesPicker.js';

const { initDates = [] } = defineProps({
    initDates: Array,
})
const emit = defineEmits(['to-next-stage']);

const { dates, formattedDates, removeDate } = useDatesPicker(initDates);

const onTagClose = (date) => {
    removeDate(date)
}
</script>

<template>
    <el-date-picker
        v-model="dates"
        type="dates"
        size="large"
        placeholder="Выбери даты"
        style="--el-date-editor-width: 100%;"
    />


    <div v-if="dates.length > 0" class="selected-dates">
        <el-text>Выбранные даты</el-text>

        <div class="selected-dates__tags">
            <el-tag
                v-for="date in formattedDates"
                :key="date.id"
                disable-transition
                closable
                type="success"
                size="large"
                @close="onTagClose(date.date)"
            >
                {{ date.formattedDate }}
            </el-tag>
        </div>
    </div>

    <el-button
        :disabled="dates.length === 0"
        size="large"
        type="success"
        style="--el-date-editor-width: 100%; margin-top: auto"
        @click="emit('to-next-stage', dates)"
    >
        Перейти к выбору времени
    </el-button>
</template>

<style scoped>
.selected-dates {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

.selected-dates__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
</style>

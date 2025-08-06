<script setup>
import { useDatesPicker } from '../../composables/useDatesPicker.js';
import { useTimePicker } from '../../composables/useTimePicker.js';

const emit = defineEmits(['to-next-stage', 'to-prev-stage']);
const { initDates = [] } = defineProps({
    initDates: Array,
})
const { timeMap, times, onTimeTagChange } = useTimePicker(initDates);
</script>

<template>
    <el-scrollbar always>
        <div class="dates">
            <div
                v-for="(selectedTimes, date) in timeMap"
                :key="date"
                class="dates__row"
            >
                <el-tag
                    type="primary"
                    size="large"
                >
                    {{ date }}
                </el-tag>

                <div class="minutes">
                    <el-check-tag
                        v-for="time in times"
                        :key="`${date}_${time}`"
                        :checked="selectedTimes.includes(time)"
                        type="success"
                        size="large"
                        @change="val => onTimeTagChange(date, time, val)"
                    >
                        {{ time }}
                    </el-check-tag>
                </div>
            </div>
        </div>
    </el-scrollbar>

    <div class="buttons">
        <el-button
            size="large"
            style="width: 100%"
            @click="emit('to-prev-stage')"
        >
            Вернуться назад
        </el-button>

        <el-button
            size="large"
            type="success"
            style="width: 100%"
        >
            Перейти к результату
        </el-button>
    </div>
</template>

<style scoped>
.dates {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
}

.dates__row {
    display: flex;
    gap: 2rem;
}

.minutes {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.buttons {
    display: flex;
    margin-top: auto;
}
</style>

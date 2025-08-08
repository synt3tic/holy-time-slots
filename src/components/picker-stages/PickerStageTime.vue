<script setup>
import { Plus } from '@element-plus/icons-vue';
import { useTimePicker } from '../../composables/useTimePicker.js';
import { formatDate } from '../../assets/utils/date-utils.js';

const emit = defineEmits(['to-next-stage', 'to-prev-stage']);
const { initDates = [] } = defineProps({
    initDates: Array,
})
const { timeMap, addTimeSlot } = useTimePicker(initDates);
</script>

<template>
    <el-scrollbar>
        <div class="dates">
            <div
                v-for="([date, selectedTimes], index) in timeMap"
                :key="index"
                class="dates__row"
            >
                <el-tag
                    type="primary"
                    size="large"
                >
                    {{ formatDate(date) }}
                </el-tag>

                <div class="minutes">
                    <div
                        v-for="(timeRange, timeIndex) in selectedTimes"
                        :key="timeIndex"
                        class="minutes__pick"
                    >
                        <el-time-picker
                            v-model="selectedTimes[timeIndex]"
                            is-range
                            format="H:mm"
                            style="width: 100%"
                        />
                    </div>

                    <el-button type="primary" :icon="Plus" style="width: 100%" @click="addTimeSlot(date)" />
                </div>
            </div>
        </div>
    </el-scrollbar>

    <div class="buttons">
        <el-button
            size="large"
            @click="emit('to-prev-stage')"
        >
            Вернуться назад
        </el-button>

        <el-button
            size="large"
            type="success"
            @click="emit('to-next-stage', 'timeMap', timeMap)"
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
    flex-direction: column;
    gap: 1rem;
    padding: 0.75rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(128, 128, 128, 0.2);
}

.minutes {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.minutes__pick {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.buttons {
    display: flex;
    gap: 1rem;
    max-width: 100%;
    margin-top: auto;

    button {
        width: 50% !important;
        margin: 0 !important;
    }
}
</style>

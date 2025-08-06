<script setup>
import { useTimePicker } from '../../composables/useTimePicker.js';
import { Plus } from '@element-plus/icons-vue';

const emit = defineEmits(['to-next-stage', 'to-prev-stage']);
const { initDates = [] } = defineProps({
    initDates: Array,
})
const { timeMap, addTimeSlot } = useTimePicker(initDates);
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
                    <div
                        v-for="(_, index) in selectedTimes"
                        class="minutes__pick"
                    >
                        <el-time-picker
                            v-model="selectedTimes[index]"
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
    flex-direction: column;
    gap: 2rem;
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
    margin-top: auto;
}
</style>

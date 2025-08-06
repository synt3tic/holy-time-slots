import { useDatesPicker } from './useDatesPicker.js';
import { ref } from 'vue';

export function useTimePicker(initDates = []) {
    const { formattedDates } = useDatesPicker(initDates);
    const getEmptyTimeRange = () => {
        return [new Date(2025, 1, 1, 9, 0), new Date(2025, 1, 1, 21, 0)];
    }
    const timeMap = ref(formattedDates.value.reduce((acc, date) => {
        acc[date.formattedDate] = [getEmptyTimeRange()];

        return acc;
    }, {}));

    const addTimeSlot = (date) => {
        timeMap.value[date].push(getEmptyTimeRange());
    };

    return {
        timeMap,
        addTimeSlot,
    }
}

import { computed, ref } from 'vue';
import { formatDate } from '../assets/utils/date-utils.js';

export function useDatesPicker(initDates = []) {
    const dates = ref([...initDates]);
    const formattedDates = computed(() => dates.value.map(date => {
        return {
            id: new Date(date).toISOString(),
            formattedDate: formatDate(date),
            date,
        }
    }));

    const removeDate = (date) => {
        dates.value = dates.value.filter(d => d !== date);
    };

    return {
        dates,
        formattedDates,
        removeDate,
    }
}

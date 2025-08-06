import { useDatesPicker } from './useDatesPicker.js';
import { ref } from 'vue';
import { generateTimeArray } from '../assets/utils/date-utils.js';

export function useTimePicker(initDates = []) {
    const { formattedDates } = useDatesPicker(initDates);
    const timeMap = ref(formattedDates.value.reduce((acc, date) => {
        acc[date.formattedDate] = [];

        return acc;
    }, {}));
    const times = generateTimeArray()
    const onTimeTagChange = (date, time, value) => {
        if (!timeMap.value[date]) {
            return;
        }

        if (value) {
            timeMap.value[date].push(time);
        } else {
            timeMap.value[date] = timeMap.value[date].filter(d => d !== time);
        }
    }

    return {
        timeMap,
        times,
        onTimeTagChange,
    }
}

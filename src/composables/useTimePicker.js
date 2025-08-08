import { useDatesPicker } from './useDatesPicker.js';
import { getEmptyTimeRange } from '../assets/utils/date-utils.js';
import { reactive, ref } from 'vue';

export function useTimePicker(initDates = []) {
    const timeMap = reactive(new Map());
    setValuesToMap(initDates)

    function setMap(dates) {
        timeMap.clear();
        setValuesToMap(dates);
    }

    function setValuesToMap(dates) {
        dates.forEach(date => {
            timeMap.set(date, [getEmptyTimeRange()])
        })
    }

    function addTimeSlot(date) {
        if (!timeMap.has(date)) {
            return;
        }

        const currentTimes = timeMap.get(date);
        timeMap.set(date, [...currentTimes, getEmptyTimeRange()]);
    }

    return {
        timeMap,
        addTimeSlot,
        setMap,
    }
}

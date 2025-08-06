export function formatDate(dateStr, locale = 'ru-RU', options = {
    day: 'numeric',
    month: 'long',
}) {
    const date = new Date(dateStr);

    return date.toLocaleDateString(locale, options);
}

export function generateTimeArray(start = '08:00', end = '19:00', stepMinutes = 30) {
    const result = [];
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    for (let minutes = startTotalMinutes; minutes <= endTotalMinutes; minutes += stepMinutes) {
        const hour = String(Math.floor(minutes / 60)).padStart(2, '0');
        const minute = String(minutes % 60).padStart(2, '0');
        result.push(`${hour}:${minute}`);
    }

    return result;
}

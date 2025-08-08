export function formatDate(dateStr, locale = 'ru-RU', options = {
    day: 'numeric',
    month: 'long',
}) {
    const date = new Date(dateStr);

    return date.toLocaleDateString(locale, options);
}

export function getEmptyTimeRange() {
    return [new Date(2025, 1, 1, 9, 0), new Date(2025, 1, 1, 21, 0)];
}

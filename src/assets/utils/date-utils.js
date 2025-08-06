export function formatDate(dateStr, locale = 'ru-RU', options = {
    day: 'numeric',
    month: 'long',
}) {
    const date = new Date(dateStr);

    return date.toLocaleDateString(locale, options);
}

/**
 * Returns the current time as a Date object.
 * @returns {Date} The current Date object.
 */
export const getCurrentTime = () => {
  return new Date()
}

/**
 * Returns the current time as a string in the specified format.
 * @param {Date} now - The current Date object.
 * @param {string} format - Format type ('datetime', 'date', 'time', 'timestamp', 'iso')
 * @param {string} locale - Locale (default: 'ja-JP')
 * @returns {string} Formatted time string
 */
export const getFormattedTime = (now: Date, format = 'datetime', locale = 'ja-JP') => {
  switch (format) {
    case 'datetime':
      return now.toLocaleString(locale)
    case 'date':
      return now.toLocaleDateString(locale)
    case 'time':
      return now.toLocaleTimeString(locale)
    case 'timestamp':
      return now.getTime().toString()
    case 'iso':
      return now.toISOString()
    default:
      return now.toLocaleString(locale)
  }
}

/**
 * Returns the current time in a custom format.
 * @param {Date} now - The current Date object.
 * @param {string} pattern - Format pattern (e.g., 'YYYY-MM-DD HH:mm:ss')
 * @returns {string} Formatted time string
 */
export const getCustomCurrentTime = (now: Date, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  const year = String(now.getFullYear())
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  return pattern
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

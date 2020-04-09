/**
 * helper function to convert a time in decimal format to string format
 * @param {number} num 2.30
 * @returns {string} 2hrs 30min
 */
export const timeToString = (num) => {
  if (!num) return '';

  const hour = Math.floor(num);
  const minute = Math.round((num - hour) * 100);

  if (hour < 1) {
    return `${minute}min`;
  } else if (hour === 1) {
    return `${hour}hr ${minute}min`;
  } else {
    return `${hour}hrs ${minute}min`;
  }
};

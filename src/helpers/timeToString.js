/**
 * helper function to convert a time in decimal format to string format
 * @param {number} num 2.30
 * @returns {string} 2hrs 30min
 */
export const timeToString = (num) => {
  let hour = Math.floor(num);
  let minute = Math.round((num - hour) * 100);

  return `${hour}hrs ${minute}min`;
};

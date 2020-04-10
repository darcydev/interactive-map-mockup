/**
 * a helper function to convert all object keys into a option within select bar
 * @param {object} objKey
 * @returns {component}
 */
export const convertKeysToOption = (objKey, options = []) => {
  Object.keys(objKey).map((v) => options.push({ value: v, label: v }));
  return options;
};

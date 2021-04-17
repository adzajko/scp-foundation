/**
 * Validator function to check if the class is one of the existing ones.
 * @param {String} objectClass The object class name.
 * @returns {Boolean} Either true, if the object class is confirmed, or false if it's not.
 */
exports.validateClass = objectClass => {
  const formatted = objectClass.toLowerCase();
  if (
    formatted !== 'safe' &&
    formatted !== 'neutralized' &&
    formatted !== 'euclid' &&
    formatted !== 'keter' &&
    formatted !== 'apollyon' &&
    formatted !== 'thaumiel'
  ) {
    return false;
  }

  return true;
};

/**
 * Simple validator function that checks the designation string.
 * @param {String} designation The designation to be validated.
 * @returns {Boolean} Either true if the designation string passed validation, or false if it didn't.
 */
exports.designationValidator = designation => {
  if (!designation || designation.length < 3) {
    return false;
  }

  return true;
};

const { validateClass } = require('./objectClassValidator');
const { designationValidator } = require('./designationValidator');

/**
 * Validate the incoming body of a POST request.
 * @param {Object} scp Should have scpName, objectClass, designation, description, containmentProcedures, fieldReports.
 * @returns {Boolean} True if properly validated, false otherwise.
 */
exports.validateScpBody = ({
  scpName,
  objectClass,
  designation,
  description,
  containmentProcedures,
  fieldReports
}) => {
  if (
    !scpName ||
    !validateClass(objectClass) ||
    !designationValidator(designation) ||
    !description ||
    !containmentProcedures ||
    !fieldReports
  ) {
    return false;
  }

  return true;
};

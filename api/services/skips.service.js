const SCP = require('../models/SCP');

exports.getAllSkips = async () => {
  const allSkips = await SCP.find();
  return allSkips;
};

/**
 * Find all SCPs by their containment class.
 * @param {String} objectClass The object class to search for.
 * @returns {Promise<Array>} The found objects by class.
 */
exports.getAllObjectsByClass = async objectClass => {
  const foundByClass = await SCP.find({
    objectClass: objectClass.toLowerCase()
  });
  return foundByClass;
};

/**
 * Find all SCPs that have partially or fully, the designation number.
 * @param {String} designation The object number, commonly referred to as designation.
 * @returns {Promise<Array>} All partial or full matches of the designation query.
 */
exports.getObjectByDesignation = async designation => {
  const foundByDesignation = await SCP.find({
    $text: { $search: designation }
  }).limit(20);

  return foundByDesignation;
};

/**
 * Add a new SCP into the DB.
 * @param {Object} scpData Should have name, class, designation, description, procedures and field reports.
 * @returns {Promise} The result of the DB insertion.
 */
exports.addSkip = async ({
  scpName,
  objectClass,
  designation,
  description,
  containmentProcedures,
  fieldReports,
  scpImgs
}) => {
  const newSkip = new SCP({
    scpName,
    objectClass,
    designation,
    scpImgs,
    description,
    containmentProcedures,
    fieldReports
  });

  await newSkip.save();
};

exports.getScpById = async id => {
  const foundSkip =  await SCP.findById(id);
  return foundSkip;
}
const { designationValidator } = require('./designationValidator');
const { validateScpBody } = require('./newScpValidator');
const { validateClass } = require('./objectClassValidator');

module.exports = {
  designationValidator,
  validateScpBody,
  validateClass
};

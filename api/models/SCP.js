const { Schema, model } = require('mongoose');

const scpSchema = new Schema({
  scpName: String,
  objectClass: {
    type: String,
    enum: ['neutralized', 'safe', 'euclid', 'keter', 'thaumiel', 'apollyon'],
    default: 'euclid',
    index: true
  },
  designation: String,
  scpImgs: {
    type: [String]
  },
  description: String,
  containmentProcedures: String,
  fieldReports: {
    type: [String]
  }
});

scpSchema.index({ designation: 'text' });

const SCP = model('SCP', scpSchema);
module.exports = SCP;

const { connect } = require('mongoose');

const dbConnection = connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true,
  useCreateIndex: true
});

module.exports = dbConnection;

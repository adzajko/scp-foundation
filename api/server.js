require('dotenv').config();
const http = require('http');
const app = require('./app');
const mongoose = require('./util/database/db');

const server = http.createServer(app);
const port = process.env.PORT;

mongoose
  .then(() => {
    server.listen(port, () => {
      console.log('API Running. Mongo connected.');
    });
  })
  .catch(err => {
    console.log(err);
    process.exit(-1);
  });

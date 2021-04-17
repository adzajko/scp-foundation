const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.routes');

const app = express();

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;

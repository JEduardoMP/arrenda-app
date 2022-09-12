const express = require("express");
const cors = require('cors');
var cookieParser = require('cookie-parser');

const { globalErrorHandler } = require('./middelwares/errors.middelwares');

// Routes
const { agendaRouter } = require("./routes/agenda.routes");

const app = express();

app.options('http://localhost:3000', cors())

app.use(express.urlencoded());
app.use(express.json());
app.use('http://localhost:3000', cors());
app.use(cookieParser());


app.use((req, res, next) => {
  res.header('Content-Type',  'application/json');
  res.header('Accept',  'application/json');
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Expose-Headers', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// Endpoints
app.use("/api/v1", agendaRouter);

app.use(globalErrorHandler);

module.exports = { app };

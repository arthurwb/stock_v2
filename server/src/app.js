/* eslint-disable no-unused-vars */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const dotenv = require("dotenv");

const Options = require("./models/option");
const Users = require("./models/users");
const { tickUpdateOptions, anotherUtilityFunction } = require("./util/util");

const indexRoute = require('./routes/index');
const apiRoute = require('./routes/api');
const authRoute = require('./routes/auth');
const stockActionRoute = require('./routes/stockAction');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

async function main() {
  await mongoose.connect(process.env.URI);
  console.log("Connected to db!");

  const interval = setInterval(await tickUpdateOptions, process.env.TICKCOUNT);
}

main().catch((err) => console.log(err));

app.use('/', indexRoute);
app.use('/api', apiRoute);
app.use('/auth', authRoute);
app.use('/saction', stockActionRoute);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;

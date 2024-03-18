const express = require("express");
const cors = require("cors");
const app = express();

let whitelist = ["*"];
let corsOptions = {
  credentials: true,
  origin: whitelist,
};

app.use(cors(corsOptions));

module.exports = app;

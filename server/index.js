const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

let whitelist = ["*"];
let corsOptions = {
  credentials: true,
  origin: whitelist,
};

app.use(cors(corsOptions));

module.exports = app;

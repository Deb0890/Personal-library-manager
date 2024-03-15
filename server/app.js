const express = require("express");
const mongoose = require("mongoose");
const app = require("./index");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const bookRoutes = require("./routes/books");

//middleware
app.use(express.json());

//an example of a middleware function with no mount path, thus it is executed everytime the app receives a request.
app.use((req, res, next) => {
  // console.log(req.path, req.method);
  next();
});

//routes

app.use("/api/books", bookRoutes);

//add error handling page for 404

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`PLM server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = require("./index");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const bookRoutes = require("./routes/books");

//middleware
app.use(express.json());

//an example of a middleware function with no mount path, thus it is executed everytime the app receives a request:
// app.use((req, res, next) => {
//   next();
// });

//routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/books", bookRoutes);
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

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

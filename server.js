// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Create an express server.
let app = express();

// Sets an initial port. this later will be use in listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
// Point the server to the route files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listen on port.
// app.listen(PORT);
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Create an express server.
const app = express();

// Sets an initial port. this later will be use in listener
var PORT = process.env.PORT || 8080;

// Listen on port.
app.listen(PORT);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// Point the server to the route files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

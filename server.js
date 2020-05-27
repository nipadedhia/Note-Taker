// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Sets an initial port. this later will be use in listener
var PORT = process.env.PORT || 8080;
app.listen(PORT);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Html Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// Set static folder to get css and js files
app.use(express.static(path.join(__dirname, "public")));

//  GET Request
app.get("/api/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    var notes = JSON.parse(data);
    res.send(notes);
  });
});

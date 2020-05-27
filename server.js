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
// If no matching route is found default to home page.
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Link to css file.
app.get("/styles", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/css/styles.css"));
});

//  GET Request
app.get("/api/notes", function (req, res) {
  return res.json(data);
});

// POST Request
app.post("/api/notes", function (req, res) {
  data.push(req.body);
  writeData();
  return res.json(data);
});

// DELETE Request
app.delete("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  data = data.filter(function (note) {
    if (note.id === id) {
      return false;
    }
    return true;
  });
  writeData();
  return res.json(data);
});

// Write data
const writeData = function () {
  fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
    if (err) throw err;
  });
};
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

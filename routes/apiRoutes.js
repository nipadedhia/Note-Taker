// Required Modules
const fs = require("fs");
const db = require("../db/db.json");

// Routing
module.exports = function (app) {
  // Write data
  const writeData = function () {
    fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
      if (err) throw err;
    });
  };
  let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  console.log(data);

  //  GET Request
  app.get("/api/notes", function (req, res) {
    return res.json(data);
  });

  // POST Request
  app.post("/api/notes", function (req, res) {
    let newnote = { ...req.body };
    newnote.id = data.length + 1;
    data.push(newnote);
    writeData();
    return res.json(newnote);
  });

  // DELETE Request
  app.delete("/api/notes/:id", function (req, res) {
    const id = parseInt(req.params.id);
    let filter = [];

    filter = data.filter((note) => note.id !== id);
    data = filter;
    writeData();
    return res.json(data);
  });
};

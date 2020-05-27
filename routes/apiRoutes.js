// If no matching route is found default to home page.
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
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

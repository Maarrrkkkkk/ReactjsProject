const express = require("express");
const mysql = require("mysql");

const app = express();

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "portfoliowebproj",
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

// Get member by ID
app.get("/api/member/:id", (req, res) => {
  const memberId = req.params.id;
  const sql = `SELECT * FROM members WHERE id = ${memberId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Start server
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

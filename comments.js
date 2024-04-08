// Create web server
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const comments = require("./comments");

// Set view engine to ejs
app.set("view engine", "ejs");

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments: comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect("/comments");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




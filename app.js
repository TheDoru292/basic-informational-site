const express = require("express");

const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(port);

require("dotenv").config();

var express = require("express");
var app = express();

app.get("/json", (req, res) => {
  console.log(process.env.MESSAGE_STYLE);
  const jsonResponse = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
      jsonResponse.message = jsonResponse.message.toUpperCase()
  }
  res.json(jsonResponse)
});

module.exports = app;

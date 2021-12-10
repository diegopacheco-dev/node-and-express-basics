require("dotenv").config();

var express = require("express");
var app = express();

app.get("/json", (req, res) => {
  let jsonResponse = { "message": "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
      jsonResponse.message = jsonResponse.message.toUpperCase();
  }
  res.json(jsonResponse);
});

app.use('/', (req, res, next) => {
    const method = req.method;
    const path = req.path;
    const ip = req.ip;

    console.log(`${method} ${path} - ${ip}`)
    next()
})

module.exports = app;

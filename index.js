const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = 7000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(PORT, () => {
  console.log("listening on *:7000");
});

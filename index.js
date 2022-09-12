const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = 7000;
const sockitio = require("socket.io");
const io = sockitio(server);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("newMessage", (res) => {
    io.emit("messageSendClient", { msg: res.msg });
  });
});

server.listen(PORT, () => {
  console.log(`your server is listing http://localhost:${PORT}`);
});

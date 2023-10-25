"use strict";

const http = require("http");

// // HTTPサーバ2
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end("<h1>Hello World !</h1>");
});
server.listen(9002);

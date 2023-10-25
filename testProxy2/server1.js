"use strict";

const http = require("http");

// // HTTPサーバ1
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end("<h3>Hello World !</h3>");
});
server.listen(9001);

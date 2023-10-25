"use strict";

const http = require("http");
const url = require("url");
const httpProxy = require("http-proxy");

const server = http.createServer(function (request, response) {
  const url_parse = url.parse(request.url, true);

  let msg = "<h1>Hello World !</h1>";
  if (url_parse.pathname === "/hello") {
    msg = "request param = " + url_parse.query["kind"];
  } else {
    msg = "<h1>Hello World !</h1>";
  }

  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(msg);
});

server.listen(8000);

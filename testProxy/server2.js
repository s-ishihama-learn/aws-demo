"use strict";

const http = require("http");

http.createServer(function(req, res) {

  res.write('Hello Proxy !!!');
  res.end();

}).listen(9000);
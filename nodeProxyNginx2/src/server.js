"use strict";

const http = require("http");
const url = require("url");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer();

const server = http.createServer(function (req, res) {
  let target = "http://proxy8003:8003/";
  const url_parse = url.parse(req.url, true);
  if (url_parse.pathname === "/hello") {
    const kind = url_parse.query["kind"];
    if (kind === "1") {
      console.log('kind:1');
      target = "http://proxy8001:8001/";
    } else if (kind === "2") {
      console.log('kind:2');
      target = "http://proxy8002:8002/";
    }
  }
  req.url = '';
  proxy.web(req, res, { target });
}).listen(8000);

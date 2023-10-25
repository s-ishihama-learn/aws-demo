"use strict";

const http = require("http");
const url = require("url");
const httpProxy = require("http-proxy");

// プロキシサーバ
const proxy = httpProxy.createProxyServer();
http.createServer((req, res) => {
    // パスに応じて送信先を変える処理
    const target =
      req.url && req.url.startsWith("/server1")
        ? "http://127.0.0.1:9001"
        : "http://127.0.0.1:9002";
    proxy.web(req, res, { target });
}).listen(8000);

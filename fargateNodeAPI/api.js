const express = require("express");

const app = express();

const responseObjectData = {
  textObject1 : {
    title: 'Objectのタイトル1です',
    subTitle: 'Objectのサブタイトル1です',
    bodyText: 'Objectの本文1です'
  },
  textObject2 : {
    title: 'Objectのタイトル2です',
    subTitle: 'Objectのサブタイトル2です',
    bodyText: 'Objectの本文2です'
  },
};

app.get("/api", function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  );

  res.json(responseObjectData);
});

app.listen(5000);

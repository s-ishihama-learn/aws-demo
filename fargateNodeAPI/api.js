const express = require("express");

const app = express();

const responseObjectData = {
  textObject1 : {
    title: 'Object�̃^�C�g��1�ł�',
    subTitle: 'Object�̃T�u�^�C�g��1�ł�',
    bodyText: 'Object�̖{��1�ł�'
  },
  textObject2 : {
    title: 'Object�̃^�C�g��2�ł�',
    subTitle: 'Object�̃T�u�^�C�g��2�ł�',
    bodyText: 'Object�̖{��2�ł�'
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

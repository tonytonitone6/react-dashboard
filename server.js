const express = require("express");
const { join } = require("path");
const history = require("connect-history-api-fallback");

const Port = process.env.PORT || 3000;
const app = express();

app.use(history());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'example.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(join(__dirname, "dist")));

app.listen(Port, () => console.log("start server"));

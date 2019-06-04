import express from 'express';

import bodyParser from 'body-parser';

import firebaseDB from './db/firebase';

// const fs = require('fs');
const http = require('http');
// const https = require('https');

const app = express();
app.use(express.static(__dirname, { dotfiles: 'allow' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* eslint func-names: ["error", "never"] */
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/api/foods/:id', (req, res) => {
  firebaseDB.getFoodById(res, req.params.id);
});

app.use((req, res) => {
  res.send('Hello there !');
});

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log('HTTP Server running on port 3000');
});

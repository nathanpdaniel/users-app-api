const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const version = process.env.VERSION || 'v1';
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
  if (err) return console.log(err);
              
  const db = client.db(process.env.MONGODB);
  routes(version, app, db);

  app.listen(port, () => {
    console.log(`Listening on ${version}`);
  });               
});
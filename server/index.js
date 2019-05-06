const express = require('express');
const mongodb = require('mongodb');
const app  = express();
const port = process.env.PORT;
const uri  = process.env.MONGODB_URI;
var   db;
mongodb.MongoClient.connect(uri, function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  db = client.db();
  console.log('database connection ready');
  app.use(express.static('../ui/dist'));
  app.listen(port, () => {
    console.log(`app is listening on port ${port}!`);
  });
});
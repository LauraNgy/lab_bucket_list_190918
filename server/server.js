const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const parser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucket_list');
    const wishesCollection = db.collection('wishes');
    const wishesRouter = createRouter(wishesCollection);
    app.use('/api/bucket_list', wishesRouter);
  })
  .catch( console.err);

  console.log('DB connect');

app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port}`);
});

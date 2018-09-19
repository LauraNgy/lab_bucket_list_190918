const ObjectID = require('mongodb').ObjectID;
const express = require('express');

const createRouter = function(collection){

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => {
      return res.json(docs)
    })
    .catch(console.error);
  });
  return router;
};

module.exports = createRouter;

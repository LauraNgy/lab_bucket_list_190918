const ObjectID = require('mongodb').ObjectID;
const express = require('express');
const getAll = require('./get_all.js');

const createRouter = function(collection){

  const router = express.Router();

  router.get('/', (req, res) => {
    return getAll(collection, res);
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .findOne({_id:ObjectID(id)})
    .then((doc) => {
      return res.json(doc)
    })
    .catch(console.error);
  });

  router.post('/', (req, res) => {
    collection
    .insertOne(req.body)
    .then(() => {
      return getAll(collection, res)
    })
    .catch(console.error);
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .updateOne(
      { _id: ObjectID(id) },
      { $set: req.body }
    )
    .then( () => {
      return getAll(collection, res);
    })
    .catch(console.error);
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne(
      { _id: ObjectID(id) }
    )
    .then( () => {
      return getAll(collection, res);
    })
    .catch(console.error);
  });

  return router;
};

module.exports = createRouter;

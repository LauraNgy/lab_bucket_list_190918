const getAll = function (collection, res) {
  collection
  .find()
  .toArray()
  .then((docs) => {
    return res.json(docs)
  })
  .catch( console.error );
}

module.exports = getAll;

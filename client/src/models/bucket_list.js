const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function(url) {
  this.url = url;
  this.request = new Request(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:wish-submitted", (evt) => {
    const newWish = evt.detail;
    this.request.post(newWish)
    .then( (evt) => {
      PubSub.publish('BucketList:all-wishes', evt);
    });
  });
  PubSub.subscribe('WishView:wish-updated', (evt) => {
    const wishDetail = evt.detail;
    this.request.put(wishDetail)
    .then( (evt) => {
      PubSub.publish('BucketList:all-wishes', evt);
    });
  });
  PubSub.subscribe('WishView:wish-deleted', (evt) => {
    this.request.delete(evt.detail)
    .then( (evt) => {
      PubSub.publish('BucketList:all-wishes', evt);
    });
  });
};

BucketList.prototype.getData = function () {
  this.request.get()
  .then((evt) => {
    PubSub.publish('BucketList:all-wishes', evt);
  });
};

module.exports = BucketList;

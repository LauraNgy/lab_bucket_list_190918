const PubSub = require('../helpers/pub_sub.js');
const WishView = require('./wish_view.js');

const WishListView = function(element) {
  this.element = element;
};

WishListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:all-wishes', (evt)=> {
    this.element.innerHTML = "";
    const wishes = evt.detail;
    wishes.forEach( (wish) => {
      const wishView = new WishView(wish, this.element);
      wishView.render();
    });
  });
};

module.exports = WishListView;

const CreateAppend = require('../helpers/create_append.js');


const WishView = function (wish, parent) {
  this.wish = wish;
  this.parent = parent;
};

WishView.prototype.render = function () {
  const wishDiv = new CreateAppend("div", "", this.parent);
  const wishName = new CreateAppend("h3", this.wish.name, wishDiv);
  const wishDeadline = new CreateAppend("p", `Achieve by: ${this.wish.deadline}`, wishDiv);
  const wishPriority = new CreateAppend("p", `Priority: ${this.wish.priority}`, wishDiv);
  //add classList for priority levels
  const wishAchieved = new CreateAppend("p", `Achieved? ${this.wish.achieved}`, wishDiv);
};

module.exports = WishView;

const CreateAppend = require('../helpers/create_append.js');


const WishView = function (wish, parent) {
  this.wish = wish;
  this.parent = parent;
};

WishView.prototype.render = function () {
  const wishDiv = new CreateAppend("form", this.parent, "");
  const nameLabel = new CreateAppend("label", wishDiv, "");
  nameLabel.textContent = "Name";
  nameLabel.classList.add('wishName');
  const wishName = new CreateAppend("input", wishDiv, this.wish.name);
  const deadlineLabel = new CreateAppend("label", wishDiv, "");
  deadlineLabel.textContent = "Deadline:";
  deadlineLabel.classList.add('wishDetail');
  const wishDeadline = new CreateAppend("input", wishDiv, this.wish.deadline);
  const priorityLabel = new CreateAppend("label", wishDiv, "");
  priorityLabel.textContent = "Priority:";
  priorityLabel.classList.add('wishDetail');
  const wishPriority = new CreateAppend("input", wishDiv, this.wish.priority);
  //add classList for priority levels
  const wishAchieved = new CreateAppend("select", wishDiv, this.wish.achieved);
  wishAchieved.classList.add('wishDetail');
  const wishYes = new CreateAppend("option", wishAchieved, "Yes");
  wishYes.textContent = "Yes";
  const wishNo = new CreateAppend("option", wishAchieved, "No");
  wishNo.textContent = "No";
  wishNo.selected = true;
  const updateBttn = new CreateAppend("input", wishDiv, "Update");
  updateBttn.type = "submit";
  
  console.log(this.wish._id);
  wishDiv.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(evt);
  });
};

module.exports = WishView;

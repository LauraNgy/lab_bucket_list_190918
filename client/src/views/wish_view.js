const CreateAppend = require('../helpers/create_append.js');
const PubSub = require('../helpers/pub_sub.js');


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
  const wishPriority = new CreateAppend("select", wishDiv, "");
  const priority = this.wish.priority;
  const wishHigh = new CreateAppend("option", wishPriority, "high");
  wishHigh.textContent = "High";
  const wishMedium = new CreateAppend("option", wishPriority, "medium");
  wishMedium.textContent = "Medium";
  const wishLow = new CreateAppend("option", wishPriority, "low");
  wishLow.textContent = "Low";
  if (wishHigh.value === priority) {
    wishHigh.selected = true;
  }
  else if (wishMedium.value === priority) {
    wishMedium.selected = true;
  }
  else {
    wishLow.selected = true;
  }
  //add classList for priority levels
  const wishAchieved = new CreateAppend("select", wishDiv, this.wish.achieved);

  const wishYes = new CreateAppend("option", wishAchieved, "Yes");
  wishYes.textContent = "Yes";
  const wishNo = new CreateAppend("option", wishAchieved, "No");
  wishNo.textContent = "No";
  wishNo.selected = true;
  const wishId = new CreateAppend("input", wishDiv, this.wish._id);
  wishId.hidden = true;
  const updateBttn = new CreateAppend("input", wishDiv, "Update");
  updateBttn.type = "submit";
  wishDiv.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newWish = {
      "name": evt.target[0].value,
      "deadline": evt.target[1].value,
      "priority": evt.target[2].value,
      "achieved": evt.target[3].value
    };
    const wishDetail = {
      "_id": evt.target[4].value,
      "wish": newWish
    };
    PubSub.publish('WishView:wish-updated', wishDetail);
  });

  const deleteBttn = new CreateAppend("button", wishDiv, "Delete");
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const id = evt.target.parentNode[4].value;
    PubSub.publish('WishView:wish-deleted', id);
  });
};

module.exports = WishView;

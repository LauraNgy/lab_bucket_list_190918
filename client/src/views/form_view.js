const PubSub = require('../helpers/pub_sub.js');

const FormView = function (element) {
  this.element = element;
};

FormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newWish = {
      "name": evt.target.name.value,
      "deadline": evt.target.deadline.value.toString(),
      "priority": evt.target.priority.value,
      "achieved": "no"
    };
    PubSub.publish("FormView:wish-submitted", newWish);
    evt.target.reset();
  });
};


module.exports = FormView;

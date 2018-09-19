const CreateAppend = function (tagName, parentNode, value) {

const newElem =  document.createElement(tagName);
  newElem.value = value;
  parentNode.appendChild(newElem);
  return newElem;
};

module.exports = CreateAppend;

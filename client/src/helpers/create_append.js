const CreateAppend = function (tagName, text, parentNode) {
const newElem =  document.createElement(tagName);
newElem.textContent = text;
parentNode.appendChild(newElem);
return newElem;
};

module.exports = CreateAppend;

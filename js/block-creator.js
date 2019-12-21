const getElementFromTemplate = function (textElement) {
  var body = document.querySelector('body');
  var main = document.querySelector('main');
  var wrapper = main.cloneNode();
  wrapper.innerHTML = textElement;
  body.replaceChild(wrapper, main);

};

export {getElementFromTemplate};

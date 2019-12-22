// create-block - модуль создающий DOM-элементы на основе текстовых данных;

const getElementFromTemplate = function (textElement) {
  const template = document.querySelector(`main`);
  const main = template.cloneNode();
  main.innerHTML = textElement;
  return main;
};

export {getElementFromTemplate};

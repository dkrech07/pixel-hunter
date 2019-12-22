// create-block - модуль создающий DOM-элементы на основе текстовых данных;

const getElementFromTemplate = function (textElement) {
  const fragment = document.createElement(`div`);
  fragment.innerHTML = textElement;
  console.log(fragment);
  return fragment;
};

export {getElementFromTemplate};

// const getElementFromTemplate = function (textElement) {
//   const body = document.querySelector(`body`);
//   const main = document.querySelector(`main`);
//   const wrapper = main.cloneNode();
//   wrapper.innerHTML = textElement;
//   body.replaceChild(wrapper, main);
//
// };

// insert-block - модуль добавляющий созданные (в create-block.js) DOM-элементы в разметку;

const removeChild = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const showScreen = (block) => {
  const main = document.querySelector(`main`);
  removeChild(main);
  main.appendChild(block);
};

export {showScreen};

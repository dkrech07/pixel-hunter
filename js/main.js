const ARROW_LEFT_KEYCODE = 37;
const ARROW_RIGHT_KEYCODE = 39;
let screenNumber = 0;

const screensList = [
  document.querySelector(`#greeting`),
  document.querySelector(`#rules`),
  document.querySelector(`#game-1`),
  document.querySelector(`#game-2`),
  document.querySelector(`#game-3`),
  document.querySelector(`#stats`)
];

const removeChild = function (element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

const showScreen = (screenNumber) => {
    const main = document.querySelector(`#main`);
    const template = screensList[screenNumber].content;
    const element = template.cloneNode(true);

    removeChild(main);
    main.appendChild(element);
};

showScreen(0);

const arrowRightPressHandler = function (evt) {
    if (evt.keyCode === ARROW_RIGHT_KEYCODE && screenNumber < 5) {
      screenNumber++;
      showScreen(screenNumber);
    }
};

const arrowLeftPressHandler = function (evt) {
    if (evt.keyCode === ARROW_LEFT_KEYCODE && screenNumber > 0) {
      screenNumber--;
      showScreen(screenNumber);
    }
};

document.addEventListener('keydown', arrowRightPressHandler);
document.addEventListener('keydown', arrowLeftPressHandler);

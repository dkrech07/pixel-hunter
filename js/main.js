
const ARROW_LEFT_KEYCODE = 37;
const ARROW_RIGHT_KEYCODE = 39;

const screensList = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
const screensLinks = [];
let screenNumberPrev = 5;
let screenNumberNext = 0;

const getScreensLinks = (screensList) => {
    screensList.forEach(function (it) {
      screensLinks.push(document.querySelector(`#${it}`));
    });

    return screensLinks;
};

const showScreen = (screenNumber) => {

  return getScreensLinks(screensList)[screenNumber];
};

const replaceScreen = (screenNumber) => {

  const contentWrapper = document.querySelector(`main`);
  const template = contentWrapper.querySelector(`#main`);


  const content = template.cloneNode();
  const currentScreen = showScreen(screenNumber).content;

  content.appendChild(currentScreen);
  contentWrapper.replaceChild(content, template);

  console.log(content);
};

replaceScreen(5);

// const pressArrow = (evt) => {
//   if (evt.keyCode === ARROW_RIGHT_KEYCODE) {
//     arrowDownHandler(evt);
//     screenNumber++;
//   }
//
//   if (evt.keyCode === ARROW_LEFT_KEYCODE) {
//     arrowDownHandler(evt);
//     screenNumber--;
//   }
//   console.log(screenNumber);
//   replaceScreen(screenNumber);
// };

// const arrowRightDownHandler = function (evt) {
//     if (evt.keyCode === ARROW_RIGHT_KEYCODE && screenNumber < 5) {
//       screenNumber++;
//       console.log(screenNumber);
//       replaceScreen(screenNumber);
//     }
// };

const arrowLeftDownHandler = function (evt) {
    if (evt.keyCode === ARROW_LEFT_KEYCODE && screenNumberPrev > 0) {
      screenNumberPrev--;
      console.log(screenNumberPrev);
      replaceScreen(screenNumberPrev);
    }
};

const arrowRightDownHandler = function (evt) {
    if (evt.keyCode === ARROW_RIGHT_KEYCODE && screenNumberNext < 5) {
      screenNumberNext++;
      console.log(screenNumberNext);
      replaceScreen(screenNumberNext);
    }
};

document.addEventListener('keydown', arrowRightDownHandler);
document.addEventListener('keydown', arrowLeftDownHandler);


// console.log(getScreensLinks(screensList));
// console.log(showScreen(1));
// replaceScreen(0);

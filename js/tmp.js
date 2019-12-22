// import {greeting} from './greeting.js';
// import {rules} from './rules.js';
// // import {gameOne} from './game-one.js';
// import {gameTwo} from './game-two.js';
// import {gameThree} from './game-three.js';
// import {stats} from './stats.js'
//
// console.log(stats);

// const removeChild = (element) => {
//   while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }
// };

// const ARROW_LEFT_KEYCODE = 37;
// const ARROW_RIGHT_KEYCODE = 39;
// const MIX_SCREEN_NUMBER = 0;
// const MAX_SCREEN_NUMBER = 5;
//
// let screenNumber = 0;
//
// const createArrows = () => {
//   const arrowsWrapper = document.createElement(`div`);
//   arrowsWrapper.classList.add(`arrows__wrap`);
//   arrowsWrapper.innerHTML = `<style>
//     .arrows__wrap {
//       position: absolute;
//       top: 95px;
//       left: 50%;
//       margin-left: -56px;
//     }
//     .arrows__btn {
//       background: none;
//       border: 2px solid black;
//       padding: 5px 20px;
//     }
//   </style>
//   <button class="arrows__btn"><-</button>
//   <button class="arrows__btn">-></button>`;
//
//   const bodyElement = document.querySelector(`body`);
//   bodyElement.appendChild(arrowsWrapper);
// };
//
// createArrows();
//
// const setArrows = () => {
//   const arrows = document.querySelectorAll(`.arrows__btn`);
//   arrows[0].classList.add(`left`);
//   arrows[1].classList.add(`right`);
// };
//
// setArrows();
//
// const arrowLeft = document.querySelector(`.arrows__btn.left`);
// const arrowRight = document.querySelector(`.arrows__btn.right`);
//
// const screensList = [
//   document.querySelector(`#greeting`),
//   document.querySelector(`#rules`),
//   document.querySelector(`#game-1`),
//   document.querySelector(`#game-2`),
//   document.querySelector(`#game-3`),
//   document.querySelector(`#stats`)
// ];
//

//

//
// const rightClickHandler = () => {
//   if (screenNumber < MAX_SCREEN_NUMBER) {
//     screenNumber++;
//     showScreen(screenNumber);
//   }
// };
//
// const leftClickHandler = () => {
//   if (screenNumber > MIX_SCREEN_NUMBER) {
//     screenNumber--;
//     showScreen(screenNumber);
//   }
// };
//
// const arrowRightPressHandler = function (evt) {
//   if (evt.keyCode === ARROW_RIGHT_KEYCODE) {
//     rightClickHandler();
//   }
// };
//
// const arrowLeftPressHandler = function (evt) {
//   if (evt.keyCode === ARROW_LEFT_KEYCODE) {
//     leftClickHandler();
//   }
// };
//
// const addArrowsHandle = () => {
//   arrowLeft.addEventListener(`click`, leftClickHandler);
//   arrowRight.addEventListener(`click`, rightClickHandler);
//   document.addEventListener(`keydown`, arrowLeftPressHandler);
//   document.addEventListener(`keydown`, arrowRightPressHandler);
// };
//
// addArrowsHandle();

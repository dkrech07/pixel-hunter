import {introElement} from './intro.js';
import {showScreen} from './insert-block.js';
import {greetingElement} from './greeting.js';

showScreen(introElement);

const asteriskButton = document.querySelector(`.intro__asterisk`);

const asteriskClickHandler = () => {
  showScreen(greetingElement);

  const continueButton = document.querySelector(`.greeting__continue`);
  const continueClickHandler = () => {
    console.log(`ok`);
  };
  continueButton.addEventListener(`click`, continueClickHandler);

  asteriskButton.removeEventListener(`click`, asteriskClickHandler);
};

asteriskButton.addEventListener(`click`, asteriskClickHandler);

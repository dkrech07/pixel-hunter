import {getElementFromTemplate} from './create-block.js';
import {showScreen} from './insert-block.js';
import {showGreeting} from './greeting.js';

const intro =
`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>`;

const addAsteriskClickHandle = () => {
  const asteriskButton = document.querySelector(`.intro__asterisk`);
  const asteriskClickHandler = () => {
    showGreeting();
    asteriskButton.removeEventListener(`click`, asteriskClickHandler);
  };
  asteriskButton.addEventListener(`click`, asteriskClickHandler);
};

const showIntro = () => {
  showScreen(getElementFromTemplate(intro));
  addAsteriskClickHandle();
};

const returnIntro = () => {
  const backButton = document.querySelector(`.header__back`);

  const backButtonClickHandler = () => {
    showIntro();
  };

  backButton.addEventListener(`click`, backButtonClickHandler);
};

export {showIntro};
export {returnIntro};

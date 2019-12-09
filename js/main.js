const screensList = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
const screensLinks = [];

const getScreensLinks = (screensList) => {
    screensList.forEach(function (it) {
      screensLinks.push(document.querySelector(`#${it}`));
    });

    return screensLinks;
};

const showScreen = (screenNumber) => {

  return getScreensLinks(screensList)[screenNumber];
};

console.log(getScreensLinks(screensList));
console.log(showScreen(0));

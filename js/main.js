import {intro} from './intro.js';
import {getElementFromTemplate} from './create-block.js';
import {showScreen} from './insert-block.js';

const blockIntro = getElementFromTemplate(intro);
showScreen(blockIntro);
// console.log(intro);
// console.log(getElementFromTemplate);
// console.log(showScreen);

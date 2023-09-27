import * as config from "./js/config.js"
import { DarkModeHover, isDarkModeOn, getDarkMode} from "./js/modules/darkmode.js";

config.darkModeCtrl.addEventListener('click', getDarkMode, false);
config.navBarCtrls[0].addEventListener('mouseover', () => {
    DarkModeHover(isDarkModeOn, true, 0);
}, false);
config.navBarCtrls[0].addEventListener('mouseleave', () => {
    DarkModeHover(isDarkModeOn, false, 0);
}, false);
config.navBarCtrls[1].addEventListener('mouseover', () => {
    DarkModeHover(isDarkModeOn, true, 1);
}, false);
config.navBarCtrls[1].addEventListener('mouseleave', () => {
    DarkModeHover(isDarkModeOn, false, 1);
}, false);
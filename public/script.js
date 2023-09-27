import * as config from "./js/config.js"
import { DarkModeHover, isDarkModeOn, getDarkMode} from "./js/modules/darkmode.js";

config.darkModeCtrl.addEventListener('click', getDarkMode, false);
for (let i = 0; i < config.navBarCtrls.length; i++) {
    config.navBarCtrls[i].addEventListener('mouseover', () => {
        DarkModeHover(isDarkModeOn, true);
    }, false);
}
for (let i = 0; i < config.navBarCtrls.length; i++) {
    config.navBarCtrls[i].addEventListener('mouseleave', () => {
        DarkModeHover(isDarkModeOn, false);
    }, false)
}
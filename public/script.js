import * as config from "./js/config.js"
import { getDarkMode } from "./js/darkmode.js";

config.darkModeCtrl.addEventListener('click', getDarkMode, false);
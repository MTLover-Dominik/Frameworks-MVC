import * as config from "./js/config.js"
import { DarkModeHover, isDarkModeOn, getDarkMode} from "./js/modules/darkmode.js";
import { RestrictionLogin, RestrictionRegister } from "./js/modules/restrictionsLoginRegister.js";
import { ValidatePassword } from "./js/modules/validators/password.js";
import { DomElementController } from "./js/modules/domElementController.js";

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

if (config.isCurrentPageLoginPage) {
    config.passwordField.addEventListener('focusin', () => {
        DomElementController("createPasswordSpecs");
    }, false);
    config.passwordField.addEventListener('focusout', () => {
        DomElementController("removePasswordSpecs");
    }, false);
    config.loginForm.addEventListener('input', () => {
        ValidatePassword("loginPage");
        RestrictionLogin();
    }, false);
}
if (config.isCurrentPageRegisterPage) {
    config.registrationForm.addEventListener('input', () => {
        ValidatePassword("registerPage");
        RestrictionRegister();
    }, false);
}
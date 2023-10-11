import * as config from "./js/config.js"
import { DarkModeHover, getDarkMode} from "./js/modules/darkmode.js";
import { Restriction } from "./js/modules/restrictionsLoginRegister.js";
import { ValidatePassword } from "./js/modules/validators/password.js";
import { DomElementController } from "./js/modules/domElementController.js";
import { IconHoverHandler } from "./js/modules/helper.js";
import { ValidateEmail } from "./js/modules/validators/email.js";

const domController = new DomElementController()

function LoginStatus () {
    const loginSuccess = localStorage.getItem("loginSuccess");
    if (loginSuccess === true) {
        console.log("Login was successful.");
    } else {
        console.log("Login was not successful.");
    }
}

config.darkModeCtrl.addEventListener('click', getDarkMode, false);
config.navBarCtrls[0].addEventListener('mouseover', () => {
    DarkModeHover(true, 0);
}, false);
config.navBarCtrls[0].addEventListener('mouseleave', () => {
    DarkModeHover(false, 0);
}, false);
config.navBarCtrls[1].addEventListener('mouseover', () => {
    DarkModeHover(true, 1);
}, false);
config.navBarCtrls[1].addEventListener('mouseleave', () => {
    DarkModeHover(false, 1);
}, false);

if (config.isCurrentPageLoginPage) {
    LoginStatus();
    config.loginForm.addEventListener('input', () => {
        Restriction("login");
    }, false);
}
if (config.isCurrentPageRegisterPage) {
    config.emailField.addEventListener('focusin', () => {
        domController.performAction("showEmailValidationMessage")
        document.addEventListener('keyup', () => {
            domController.performAction("emailValidationStatus", ValidateEmail());
        }, false);
    }, false);
    config.emailField.addEventListener('focusout', () => {
        domController.performAction("hideEmailValidationMessage")
    }, false);
    config.passwordField.addEventListener('focusin', () => {
        domController.performAction("createPasswordSpecs");
        document.addEventListener('keyup', () => {
            ValidatePassword();
        }, false);
    }, false);
    config.passwordField.addEventListener('focusout', () => {
        domController.performAction("removePasswordSpecs");
    }, false);
    config.showPassword.addEventListener('mouseover', () => {
        domController.performAction('iconHovered', config.showPassword, config.showPasswordIcon, true);
    });
    config.showPassword.addEventListener('mouseleave', () => {
        domController.performAction('iconUnHovered', config.showPassword, config.showPasswordIcon, false);
    });
    config.showPassword.addEventListener('click', () => {
        domController.performAction("passwordVisibility", config.passwordField, config.showPasswordIcon);
    }, false);
    config.confirmPasswordField.addEventListener('focusin', () => {
        domController.performAction("showConfirmationStatus");
        document.addEventListener('keyup', () => {
            domController.performAction("changeConfirmationStatus");
        }, false)
    }, false);
    config.confirmPasswordField.addEventListener('focusout', () => {
        domController.performAction("hideConfirmationStatus");
    }, false);
    config.showConfirm.addEventListener('mouseover', () => {
        domController.performAction('iconHovered', config.showConfirm, config.showConfirmationIcon, true);
    });
    config.showConfirm.addEventListener('mouseleave', () => {
        domController.performAction('iconUnHovered', config.showConfirm, config.showConfirmationIcon, false);
    });
    config.showConfirm.addEventListener('click', () => {
        domController.performAction("passwordVisibility", config.confirmPasswordField, config.showConfirmationIcon);
    }, false);
    config.registrationForm.addEventListener('input', () => {
        Restriction("register");
    }, false);
}
if (config.isCurrentPageDashboardPage) {
    LoginStatus();
}
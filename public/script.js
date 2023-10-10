import * as config from "./js/config.js"
import { DarkModeHover, getDarkMode} from "./js/modules/darkmode.js";
import { Restriction } from "./js/modules/restrictionsLoginRegister.js";
import { ValidatePassword } from "./js/modules/validators/password.js";
import { DomElementController } from "./js/modules/domElementController.js";
import { IconHovered } from "./js/modules/helper.js";
import { ValidateEmail } from "./js/modules/validators/email.js";

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
        DomElementController("showEmailValidationMessage")
        document.addEventListener('keyup', () => {
            DomElementController("emailValidationStatus", "", "", ValidateEmail());
        }, false);
    }, false);
    config.emailField.addEventListener('focusout', () => {
        DomElementController("hideEmailValidationMessage")
    }, false);
    config.passwordField.addEventListener('focusin', () => {
        DomElementController("createPasswordSpecs");
        document.addEventListener('keyup', () => {
            ValidatePassword();
        }, false);
    }, false);
    config.passwordField.addEventListener('focusout', () => {
        DomElementController("removePasswordSpecs");
    }, false);
    config.showPassword.addEventListener('mouseover', () => {
        IconHovered(true, config.showPassword, config.showPasswordIcon);
    });
    config.showPassword.addEventListener('mouseleave', () => {
        IconHovered(false, config.showPassword, config.showPasswordIcon);
    });
    config.showPassword.addEventListener('click', () => {
        DomElementController("passwordVisibility", config.passwordField, config.showPasswordIcon);
    }, false);
    config.confirmPasswordField.addEventListener('focusin', () => {
        DomElementController("showConfirmationStatus");
        document.addEventListener('keyup', () => {
            DomElementController("changeConfirmationStatus");
        }, false)
    }, false);
    config.confirmPasswordField.addEventListener('focusout', () => {
        DomElementController("hideConfirmationStatus");
    }, false);
    config.showConfirm.addEventListener('mouseover', () => {
        IconHovered(true, config.showConfirm, config.showConfirmationIcon);
    });
    config.showConfirm.addEventListener('mouseleave', () => {
        IconHovered(false, config.showConfirm, config.showConfirmationIcon);
    });
    config.showConfirm.addEventListener('click', () => {
        DomElementController("passwordVisibility", config.confirmPasswordField, config.showConfirmationIcon);
    }, false);
    config.registrationForm.addEventListener('input', () => {
        Restriction("register");
    }, false);
}
if (config.isCurrentPageDashboardPage) {
    LoginStatus();
}
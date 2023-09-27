import * as config from "../config.js";

export function RestrictionLogin () {
    if (config.emailField.value !== "" && config.passwordField.value !== "") {
        config.loginButton.removeAttribute('disabled');
        config.loginButton.classList.remove('disabledButton')
    } else {
        config.loginButton.setAttribute('disabled', 'disabled');
        config.loginButton.classList.add('disabledButton');
    }
}

export function RestrictionRegister () {
    if (config.nameField.value !== "" && config.emailField.value !== "" && config.passwordField.value !== "" && config.confirmPasswordField.value !== "") {
        config.registerButton.removeAttribute('disabled');
        config.registerButton.classList.remove('disabledButton')
    } else {
        config.registerButton.setAttribute('disabled', 'disabled');
        config.registerButton.classList.add('disabledButton');
    }
}
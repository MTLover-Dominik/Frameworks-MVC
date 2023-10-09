import * as config from "../config.js";
import { ValidatePassword } from "./validators/password.js";

function Login () {
    if (config.emailField.value !== "" && config.passwordField.value !== "") {
        config.loginButton.removeAttribute('disabled');
        config.loginButton.classList.remove('disabledButton')
    } else {
        config.loginButton.setAttribute('disabled', 'disabled');
        config.loginButton.classList.add('disabledButton');
    }
}

function Register () {
    if (config.nameField.value !== ""
        && config.emailField.value !== ""
        && config.passwordField.value !== ""
        && config.confirmPasswordField.value !== ""
        && config.passwordField.value === config.confirmPasswordField.value
    ) {
        if (ValidatePassword()) {
            config.registerButton.removeAttribute('disabled');
            config.registerButton.classList.remove('disabledButton');
        }
    } else {
        config.registerButton.setAttribute('disabled', 'disabled');
        config.registerButton.classList.add('disabledButton');
    }
}

export function Restriction (page) {
    if (page === "login") {
        Login();
    }
    if (page === "register") {
        Register()
    }
}
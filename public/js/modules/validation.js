import * as config from "../config.js";

function PasswordLength (password) {
    if (password.length >= 8) {
        config.passwordLength.style.color = "green";
        return true;
    }
    config.passwordLength.style.color = "red";
    return false;
}

function PasswordUppercaseLetter (password) {
    if (/[A-Z]/.test(password)) {
        config.passwordUppercaseLetter.style.color = "green";
        return true;
    }
    config.passwordUppercaseLetter.style.color = "red";
    return false;
}

function PasswordLowercaseLetter (password) {
    if (/[a-z]/.test(password)) {
        config.passwordLowercaseLetter.style.color = "green";
        return true;
    }
    config.passwordLowercaseLetter.style.color = "red";
    return false;
}

function PasswordNumber (password) {
    if (/[0-9]/.test(password)) {
        config.passwordNumber.style.color = "green";
        return true;
    }
    config.passwordNumber.style.color = "red";
    return false;
}

function PasswordSpecialChar (password) {
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\"-äöüß-]/.test(password)) {
        config.passwordSpecialChar.style.color = "green";
        return true;
    }
    config.passwordSpecialChar.style.color = "red";
    return false;
}

export function ValidatePassword () {
    let password = config.passwordField.value

    PasswordLength(password);
    PasswordUppercaseLetter(password);
    PasswordLowercaseLetter(password);
    PasswordNumber(password);
    PasswordSpecialChar(password);

    if (PasswordLength(password) && PasswordUppercaseLetter(password) && PasswordLowercaseLetter(password) && PasswordNumber(password) && PasswordSpecialChar(password)) {
        console.log("%cEvery available test is true", "color: orange");
    }
}
import * as config from "../../config.js";

function PasswordLength () {
    const passwordLength = document.getElementById('passwordLength')

    if (config.passwordField.value.length >= 8) {
        passwordLength.style.color = "green";
        return true;
    }
    passwordLength.style.color = "red";
    return false;
}

function PasswordUppercaseLetter () {
    const passwordUppercaseLetter = document.getElementById('passwordUppercaseLetter');

    if (/[A-Z]/.test(config.passwordField.value)) {
        passwordUppercaseLetter.style.color = "green";
        return true;
    }
    passwordUppercaseLetter.style.color = "red";
    return false;
}

function PasswordLowercaseLetter () {
    const passwordLowercaseLetter = document.getElementById('passwordLowercaseLetter');

    if (/[a-z]/.test(config.passwordField.value)) {
        passwordLowercaseLetter.style.color = "green";
        return true;
    }
    passwordLowercaseLetter.style.color = "red";
    return false;
}

function PasswordNumber () {
    const passwordNumber = document.getElementById('passwordNumber');

    if (/[0-9]/.test(config.passwordField.value)) {
        passwordNumber.style.color = "green";
        return true;
    }
    passwordNumber.style.color = "red";
    return false;
}

function PasswordSpecialChar () {
    const passwordSpecialChar = document.getElementById('passwordSpecialChar');

    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\" \-äöüß-]/.test(config.passwordField.value)) {
        passwordSpecialChar.style.color = "green";
        return true;
    }
    passwordSpecialChar.style.color = "red";
    return false;
}

export function ValidatePassword (flag) {
    PasswordLength();
    PasswordUppercaseLetter();
    PasswordLowercaseLetter();
    PasswordNumber();
    PasswordSpecialChar();

    if (flag === "registerPage") {
        if (PasswordLength() && PasswordUppercaseLetter() && PasswordLowercaseLetter() && PasswordNumber() && PasswordSpecialChar()) {
            return true;
        }
    }
    return false;
}
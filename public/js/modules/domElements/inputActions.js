import * as config from "../../config.js";

export function ShowEmailValidationMessage() {
    config.emailRequirements.style.display = "block";
}
export function EmailValidationStatus(status) {
    const emailValidationIcon = document.getElementById("emailValidationIcon")
    console.log("%cthe status is: " + status, "color: blue");
    if (status === false) {
        emailValidationIcon.classList.remove("fa-circle-check");
        emailValidationIcon.classList.remove("far");
        emailValidationIcon.classList.add("fa");
        emailValidationIcon.classList.add("fa-triangle-exclamation");
    } else if (status === true) {
        emailValidationIcon.classList.remove("fa-triangle-exclamation");
        emailValidationIcon.classList.remove("fa");
        emailValidationIcon.classList.add("far");
        emailValidationIcon.classList.add("fa-circle-check");
    }
}
export function HideEmailValidationMessage() {
    config.emailRequirements.style.display = "none";
}

export function PasswordVisibility(element, elementIcon) {
    if (element.type === "password") {
        element.type = "text";
        elementIcon.classList.remove("fa-eye");
        elementIcon.classList.add("fa-eye-slash");
    } else if (element.type === "text") {
        element.type = "password";
        elementIcon.classList.remove("fa-eye-slash");
        elementIcon.classList.add("fa-eye");
    }
}

export function ShowConfirmationStatus() {
    const confirmationStatus = document.getElementById("statusIcon");
    confirmationStatus.style.display = "flex";
}
export function ChangeConfirmationStatus(passwordStatus) {
    const confirmationStatusIcon = document.getElementById("confirmIcon");
    if (passwordStatus === false) {
        confirmationStatusIcon.classList.remove("fa-check");
        confirmationStatusIcon.classList.add("fa-xmark");
        confirmationStatusIcon.style.color = "red";
    } else if (passwordStatus === true) {
        confirmationStatusIcon.classList.remove("fa-xmark");
        confirmationStatusIcon.classList.add("fa-check");
        confirmationStatusIcon.style.color = "green";
    }
}
export function HideConfirmationStatus() {
    const confirmationStatus = document.getElementById("statusIcon");
    confirmationStatus.style.display = "none";
}
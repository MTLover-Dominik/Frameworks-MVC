import * as config from "../../config.js";

export function ShowPassword() {

}
export function HidePassword() {

}

export function ShowPasswordConfirmation() {

}
export function HidePasswordConfirmation() {

}

export function ShowConfirmationStatus() {
    const confirmationStatus = document.getElementById("statusIcon");
    confirmationStatus.style.display = "flex";
}
export function ChangeConfirmationStatus(passwordStatus) {
    const confirmationStatusIcon = document.getElementById("confirmIcon");
    if (passwordStatus === false) {
        confirmationStatusIcon.classList.add("fa-xmark");
        confirmationStatusIcon.classList.remove("fa-check");
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
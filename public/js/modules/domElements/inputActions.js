export class InputActions {
    constructor(status = false, passwordStatus = false) {
        this.status = status;
        this.passwordStatus = passwordStatus;
    }

    showElement(element, value) {
        element.style.display = value;
    }
    hideElement(element, value) {
        element.style.display = value;
    }
    isEmailValid() {
        const emailValidationIcon = document.getElementById("emailValidationIcon");
        if (this.status) {
            emailValidationIcon.classList.remove("fa-triangle-exclamation");
            emailValidationIcon.classList.remove("fa");
            emailValidationIcon.classList.add("far");
            emailValidationIcon.classList.add("fa-circle-check");
        } else if (!this.status) {
            emailValidationIcon.classList.remove("fa-circle-check");
            emailValidationIcon.classList.remove("far");
            emailValidationIcon.classList.add("fa");
            emailValidationIcon.classList.add("fa-triangle-exclamation");
        }
    }
    isPasswordVisible(input, elementIcon) {
        if (input.type === "password") {
            input.type = "text";
            elementIcon.classList.remove("fa-eye");
            elementIcon.classList.add("fa-eye-slash");
        } else if (input.type === "text") {
            input.type = "password";
            elementIcon.classList.remove("fa-eye-slash");
            elementIcon.classList.add("fa-eye");
        }
    }
    changeConfirmationStatus() {
        const confirmationStatusIcon = document.getElementById("confirmIcon");
        if (!this.passwordStatus) {
            confirmationStatusIcon.classList.remove("fa-check");
            confirmationStatusIcon.classList.add("fa-xmark");
            confirmationStatusIcon.style.color = "red";
        } else if (this.passwordStatus) {
            confirmationStatusIcon.classList.remove("fa-xmark");
            confirmationStatusIcon.classList.add("fa-check");
            confirmationStatusIcon.style.color = "green";
        }
    }
}
export class InputActions {
    constructor() {

    }

    showElement(element, value) {
        element.style.display = value;
    }
    hideElement(element, value) {
        element.style.display = value;
    }
    isEmailValid(element, status) {
        if (status) {
            element.classList.remove("fa-triangle-exclamation");
            element.classList.remove("fa");
            element.classList.add("far");
            element.classList.add("fa-circle-check");
        } else if (!status) {
            element.classList.remove("fa-circle-check");
            element.classList.remove("far");
            element.classList.add("fa");
            element.classList.add("fa-triangle-exclamation");
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
    changeConfirmationStatus(confirmationStatusIcon, passwordStatus) {
        if (!passwordStatus) {
            confirmationStatusIcon.classList.remove("fa-check");
            confirmationStatusIcon.classList.add("fa-xmark");
            confirmationStatusIcon.style.color = "red";
        } else if (passwordStatus) {
            confirmationStatusIcon.classList.remove("fa-xmark");
            confirmationStatusIcon.classList.add("fa-check");
            confirmationStatusIcon.style.color = "green";
        }
    }
}
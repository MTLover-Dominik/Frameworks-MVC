import * as config from "../config.js";
import { OutputArea } from "./domElements/outputArea.js";
import { InputActions } from "./domElements/inputActions.js";

export function DomElementController (action, element = HTMLElement, icon, status = false) {
    const inputAction = new InputActions(status, config.passwordField.value === config.confirmPasswordField.value);
    const outputArea = new OutputArea();

    if (typeof element === 'undefined' || element instanceof HTMLElement) {
        element = element || "";
    }

    switch (action) {
        case "showEmailValidationMessage":
            inputAction.showElement(config.emailRequirements, "block");
            break;
        case "emailValidationStatus":
            inputAction.isEmailValid(status);
            break;
        case "hideEmailValidationMessage":
            inputAction.hideElement(config.emailRequirements, "none");
            break;
        case "createPasswordSpecs" :
            outputArea.createPasswordOutput();
            break;
        case "removePasswordSpecs":
            outputArea.removePasswordOutput();
            break;
        case "passwordVisibility":
            inputAction.isPasswordVisible(element, icon);
            break;
        case "showConfirmationStatus":
            inputAction.showElement(document.getElementById("statusIcon"), "flex");
            break;
        case "changeConfirmationStatus":
            inputAction.changeConfirmationStatus();
            break;
        case "hideConfirmationStatus":
            inputAction.hideElement(document.getElementById("statusIcon"), "none")
            break;
    }
}
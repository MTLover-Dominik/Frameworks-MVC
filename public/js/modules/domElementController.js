import * as config from "../config.js";
import { OutputArea } from "./domElements/outputArea.js";
import { InputActions } from "./domElements/inputActions.js";
import { IconHoverHandler } from "./helper.js";

export class DomElementController {
    constructor() {
        this.inputAction = new InputActions();
        this.outputArea = new OutputArea();
        this.iconHoverHandler = new IconHoverHandler();
        this.emailRequirements = config.emailRequirements;
        this.statusIcon = document.getElementById('statusIcon');
        this.confirmIcon = document.getElementById("confirmIcon");
    }

    performAction(action, element = HTMLElement, icon, flag = false) {
        if (typeof element === 'undefined' || element instanceof HTMLElement) {
            element = element || "";
        }

        switch (action) {
            case "iconHovered":
                this.iconHoverHandler.hovered(flag, element, icon);
                break;
            case "iconUnHovered":
                this.iconHoverHandler.unHovered(flag, element, icon);
                break;
            case "showEmailValidationMessage":
                this.inputAction.showElement(this.emailRequirements, "block");
                break;
            case "emailValidationStatus":
                this.inputAction.isEmailValid(flag);
                break;
            case "hideEmailValidationMessage":
                this.inputAction.hideElement(this.emailRequirements, "none");
                break;
            case "createPasswordSpecs" :
                this.outputArea.createPasswordOutput();
                break;
            case "removePasswordSpecs":
                this.outputArea.removePasswordOutput();
                break;
            case "passwordVisibility":
                this.inputAction.isPasswordVisible(element, icon);
                break;
            case "showConfirmationStatus":
                this.inputAction.showElement(this.statusIcon, "flex");
                break;
            case "changeConfirmationStatus":
                this.inputAction.changeConfirmationStatus(this.confirmIcon, config.passwordField.value === config.confirmPasswordField.value);
                break;
            case "hideConfirmationStatus":
                this.inputAction.hideElement(this.statusIcon, "none");
                break;
        }
    }
}
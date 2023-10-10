import * as config from "../config.js";
import { createPasswordOutputField, removeOutputField } from "./domElements/outputArea.js";
import {
    ShowEmailValidationMessage,
    EmailValidationStatus,
    HideEmailValidationMessage,
    PasswordVisibility,
    ShowConfirmationStatus,
    ChangeConfirmationStatus,
    HideConfirmationStatus,
} from "./domElements/inputActions.js";

export function DomElementController (action, element, icon, status) {
    switch (action) {
        case "showEmailValidationMessage":
            ShowEmailValidationMessage();
            break;
        case "emailValidationStatus":
            EmailValidationStatus(status);
            break;
        case "hideEmailValidationMessage":
            HideEmailValidationMessage();
            break;
        case "createPasswordSpecs" :
            createPasswordOutputField();
            break;
        case "removePasswordSpecs":
            removeOutputField();
            break;
        case "passwordVisibility":
            PasswordVisibility(element, icon);
            break;
        case "showConfirmationStatus":
            ShowConfirmationStatus();
            break;
        case "changeConfirmationStatus":
            ChangeConfirmationStatus(config.passwordField.value === config.confirmPasswordField.value);
            break;
        case "hideConfirmationStatus":
            HideConfirmationStatus();
            break;
    }
}
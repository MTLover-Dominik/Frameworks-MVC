import * as config from "../config.js";
import { createPasswordOutputField, removeOutputField } from "./domElements/outputArea.js";
import {
    ChangeConfirmationStatus,
    HideConfirmationStatus,
    PasswordVisibility,
    ShowConfirmationStatus,
} from "./domElements/inputActions.js";

export function DomElementController (action, element, icon) {
    switch (action) {
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
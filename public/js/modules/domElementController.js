import * as config from "../config.js";
import { createPasswordOutputField, removeOutputField } from "./domElements/outputArea.js";
import {ChangeConfirmationStatus, HideConfirmationStatus, ShowConfirmationStatus} from "./domElements/inputActions.js";

export function DomElementController (action) {
    switch (action) {
        case "createPasswordSpecs" :
            createPasswordOutputField();
            break;
        case "removePasswordSpecs":
            removeOutputField();
            break;
        case "showPassword":
            //function for showing password
            break;
        case "hidePassword":
            //function for hiding the password
            break;
        case "showPasswordConfirmation":
            //function for checking passwords
            break;
        case "hidePasswordConfirmation":
            //function for remove checking of passwords
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
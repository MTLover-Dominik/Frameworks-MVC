import * as config from "../../config.js";

function EmailLayout() {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(config.emailField.value)) {
        config.emailRequirements.style.color = "green";
        return true;
    }
    config.emailRequirements.style.color = "rgb(200,0,0)";
    return false;
}

export function ValidateEmail() {
    return EmailLayout();
}
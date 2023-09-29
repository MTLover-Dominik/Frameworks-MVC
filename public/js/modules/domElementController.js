import * as config from "../config.js"
import { createOutputField, removeOutputField } from "./domElements/outputArea.js";

export function DomElementController (action) {
    if (action === "createPasswordSpecs") {
        createOutputField();
    }
    if (action === "removePasswordSpecs") {
        removeOutputField();
    }
}
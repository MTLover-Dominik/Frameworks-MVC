import * as config from "../config.js";

function adjustStyling (color, element) {
    config.navBarCtrlsHover[element].style.color = color;
    config.navBarCtrlsHover[element].style.borderColor = color;
}

export function HoverOn(color, element) {
    for (let i = 0; i < config.navBarCtrls.length; i++) {
        config.navBarCtrls[i].classList.add('navbarControlsHover');
        adjustStyling(color, element);
    }
}

export function HoverOff(color, element) {
    for (let i = 0; i < config.navBarCtrls.length; i++) {
        adjustStyling(color, element)
    }
}
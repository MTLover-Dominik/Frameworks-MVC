import * as config from "../config.js";

function adjustStyling (color) {
    for (let ii = 0; ii < config.navBarCtrlsHover.length; ii++) {
        config.navBarCtrlsHover[ii].style.color = color;
        config.navBarCtrlsHover[ii].style.borderColor = color;
    }
}

export function HoverOn(color) {
    for (let i = 0; i < config.navBarCtrls.length; i++) {
        config.navBarCtrls[i].classList.add('navbarControlsHover');
        adjustStyling(color);
    }
}

export function HoverOff(color) {
    for (let i = 0; i < config.navBarCtrls.length; i++) {
        adjustStyling(color)
    }
}
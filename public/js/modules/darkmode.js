import * as config from "../config.js";
import { HoverOff, HoverOn } from "./darkmodeHover.js";

let darkMode = localStorage.getItem("dark-mode");
export let isDarkModeOn = false;

if (darkMode === null) {
    localStorage.setItem("dark-mode", "disabled");
}

const enableDarkMode = () => {
    document.body.style.backgroundColor = '#AAAAAA';
    config.navBar.style.backgroundColor = '#505050';
    for (let i = 0; i < config.navBarCtrls.length; i++) {
        config.navBarCtrls[i].style.border = 'solid rgba(220, 220, 220, 0.7) 1px';
        config.navBarCtrls[i].style.color = 'rgba(220, 220, 220, 0.7)';
    }
    config.darkModeIcon.classList.remove("fa-moon");
    config.darkModeIcon.classList.add("fa-sun");
    isDarkModeOn = true;
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    document.body.style.backgroundColor = '#FFFFFF';
    config.navBar.style.backgroundColor = '#C7C5C5';
    for (let i = 0; i < config.navBarCtrls.length; i++) {
        config.navBarCtrls[i].style.border = 'solid rgba(30, 30, 30, 0.7) 1px';
        config.navBarCtrls[i].style.color = 'rgba(30, 30, 30, 0.7)';
    }
    config.darkModeIcon.classList.remove("fa-sun");
    config.darkModeIcon.classList.add("fa-moon");
    isDarkModeOn = false;
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

export function getDarkMode () {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
        return
    }
    if (darkMode === "enabled") {
        disableDarkMode();
    }
}

export function DarkModeHover(hover, flag, element) {
    if (!document.getElementsByClassName('navbarControlsHover')) {
        config.navBarCtrls[element].classList.add('navbarControlsHover');
    }
    if (flag) {
        if (hover) {
            HoverOn("#FFFFFF", element);
        } else {
            HoverOn("#000000", element);
        }
    } else {
        if (hover) {
            HoverOff("rgba(220, 220, 220, 0.7)", element);
        } else {
            HoverOff("rgba(30, 30, 30, 0.7)", element);
        }
    }
}
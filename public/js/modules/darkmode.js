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
    /*if (config.doesSpacesExist === true) {
        for (let i = 0; i < config.spaces.length; i++) {
            config.spaces[i].style.backgroundColor = '#838282';
        }
    }*/
    /*if (config.doesInfoAndHeadlineExist === true) {
        config.infoAndHeadline.style.backgroundColor = '#838282';
    }
    if (config.doesDarkmodeChangerExist === true) {
        config.darkModeChanger.setAttribute('src', 'images/lightmode.png');
    }
    if (config.doesSearchpageHeadline === true) {
        config.headLine.style.color = 'black';
    }*/
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

export function DarkModeHover(flag, hover) {
    if (!document.getElementsByClassName('navbarControlsHover')) {
        console.log("%cnavbarControlsHover existiert nicht", "color: red");
        for (let i = 0; i < config.navBarCtrls.length; i++) {
            config.navBarCtrls[i].classList.add('navbarControlsHover');
        }
    }
    if (hover) {
        if (flag) {
            HoverOn("#FFFFFF");
        } else {
            HoverOn("#000000");
        }
    } else {
        if (flag) {
            HoverOff("rgba(220, 220, 220, 0.7)");
        } else {
            HoverOff("rgba(30, 30, 30, 0.7)");
        }
    }
}
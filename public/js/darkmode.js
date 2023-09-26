import * as config from "./config.js";

let darkMode = localStorage.getItem("dark-mode");

if (darkMode === null) {
    localStorage.setItem("dark-mode", "disabled");
}

const enableDarkMode = () => {
    config.navBar.style.backgroundColor = '#505050';
    document.body.style.backgroundColor = '#AAAAAA';
    config.darkModePicture.setAttribute('alt', 'Sun');
    config.darkModePicture.setAttribute('src', 'pictures/lightmode.png');
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
    localStorage.setItem("dark-mode", "enabled");
};


const disableDarkMode = () => {
    config.navBar.style.backgroundColor = '#C7C5C5';
    document.body.style.backgroundColor = '#FFFFFF';
    config.darkModeCtrl.setAttribute('alt', 'Moon');
    config.darkModePicture.setAttribute('src', 'pictures/nightmode.png');
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
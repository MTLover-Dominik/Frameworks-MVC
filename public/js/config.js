//Not global elements query
export const isCurrentPageLoginPage = !!document.getElementById('loginTitle');
export const isCurrentPageRegisterPage = !!document.getElementById('registerTitle');

//For validation
export const passwordLength = document.getElementById('passwordLength');
export const passwordUppercaseLetter = document.getElementById('passwordBigLetter');
export const passwordLowercaseLetter = document.getElementById('passwordSmallLetter');
export const passwordNumber = document.getElementById('passwordNumber');
export const passwordSpecialChar = document.getElementById('passwordSpecialChar');

//Not global elements
export const loginForm = document.getElementById('loginForm')
export const registrationForm = document.getElementById('registrationForm');
export const nameField = document.getElementById('name');
export const emailField = document.getElementById('email');
export const passwordField = document.getElementById('password');
export const confirmPasswordField = document.getElementById('confirm')
export const loginButton = document.getElementById('loginButton');
export const registerButton = document.getElementById('registerButton');

//Global elements
export const navBar = document.getElementById('navbarCustom');
export const navBarCtrls = document.getElementsByClassName('navbarControls');
export const navBarCtrlsHover = document.getElementsByClassName('navbarControlsHover');
export const darkModeCtrl = document.getElementById('darkModeControl');
export const darkModeIcon = document.getElementById('darkModeIcon');
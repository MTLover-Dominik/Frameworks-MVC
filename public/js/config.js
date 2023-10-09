//Not global elements query
export const isCurrentPageLoginPage = !!document.getElementById('loginTitle');
export const isCurrentPageRegisterPage = !!document.getElementById('registerTitle');
export const isCurrentPageDashboardPage = !!document.getElementById('dashboardTitle');


//Not global elements
export const outputField = document.getElementById('outputField')
export const loginForm = document.getElementById('loginForm')
export const registrationForm = document.getElementById('registrationForm');
export const nameField = document.getElementById('name');
export const emailField = document.getElementById('email');
export const passwordField = document.getElementById('password');
export const confirmPasswordField = document.getElementById('confirm');
export const showPasswordIcon = document.getElementById('showPassword');
export const showConfirmationIcon = document.getElementById('showConfirmation');
export const loginButton = document.getElementById('loginButton');
export const registerButton = document.getElementById('registerButton');


//Global elements
export const navBar = document.getElementById('navbarCustom');
export const navBarCtrls = document.getElementsByClassName('navbarControls');
export const navBarCtrlsHover = document.getElementsByClassName('navbarControlsHover');
export const darkModeCtrl = document.getElementById('darkModeControl');
export const darkModeIcon = document.getElementById('darkModeIcon');